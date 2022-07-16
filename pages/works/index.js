import supabase from "utils/supabase"
import { useEffect, useRef, useState } from "react"
import Thumbnail from "components/videos/Thumbnail"
import { MouseMoveScroll } from "components/animations/MouseMoveScroll"
import { Swing } from "components/animations/Swing"
import Head from "next/head"
import Navigation from "components/header/navigation/Navigation"
import Logo from "components/header/logo/Logo"
import ContactModal from "components/modal/ContactModal"

export default function Videos({ videos }) {
    const [thumbnails, setThumbnails] = useState([])
    const holder = useRef(null)
    const thumbnailList = []
    const getRandomBetween = (min, max) => Math.random() * (max - min) + min
    let videoName, aspectRatio, randomViewportWidth, viewportHeight, pixelWidth, pixelHeight,
        randomX, randomY, minimumDistanceX, minimumDistanceY, distanceX, distanceY, protect = 0
    const generateRandomSizeAndPosition = (aspectRatio) => {
        if (aspectRatio <= 1) randomViewportWidth = getRandomBetween(20, 25)
        else randomViewportWidth = getRandomBetween(35, 60)

        viewportHeight = randomViewportWidth / aspectRatio
        pixelWidth = (document.documentElement.clientWidth * randomViewportWidth) / 100
        pixelHeight = (document.documentElement.clientWidth * viewportHeight) / 100
        randomX = getRandomBetween(pixelWidth / 1.5, holder.current.offsetWidth - pixelWidth * 1.5)
        randomY = getRandomBetween(pixelHeight / 1.25, holder.current.offsetHeight - pixelHeight * 2)
    }
    const checkIfOverlap = () => {
        for (let i = 0; i < thumbnailList.length; i++) {
            const other = thumbnailList[i]

            if (other.pixelWidth > pixelWidth) {
                minimumDistanceX = other.pixelWidth
                minimumDistanceY = other.pixelHeight
            } else {
                minimumDistanceX = pixelWidth
                minimumDistanceY = pixelHeight
            }

            distanceX = Math.abs(other.randomX - randomX)
            distanceY = Math.abs(other.randomY - randomY)

            if (distanceX <= minimumDistanceX && distanceY <= minimumDistanceY)
                return false
        }

        thumbnailList.push({ videoName, randomViewportWidth, viewportHeight, randomX, randomY })
        return true
    }
    const generateThumbnail = (video) => {
        videoName = video.name
        aspectRatio = video.pixel_width / video.pixel_height
        do {
            protect++
            generateRandomSizeAndPosition(aspectRatio)
            if (protect > 10000) return
        } while (!checkIfOverlap())
    }

    useEffect(() => {
        videos.forEach(video => {
            generateThumbnail(video)
        })
        setThumbnails(thumbnailList)
        console.log("thumbnails:", thumbnailList.length)
    }, [])

    return (
        <>
            <Head>
                <title>Osman Işık | Works</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
            <Logo />
            <Navigation />
            <MouseMoveScroll ref={holder}>
                {thumbnails.length && (
                    <Swing>
                        {thumbnails.map((thumbnail, i) =>
                            <Thumbnail
                                key={i}
                                videoName={thumbnail.videoName}
                                width={thumbnail.randomViewportWidth}
                                height={thumbnail.viewportHeight}
                                x={thumbnail.randomX}
                                y={thumbnail.randomY}
                            />
                        )}
                    </Swing>
                )}
            </MouseMoveScroll>
            <ContactModal />
        </>
    )
}

export const getStaticProps = async () => {
    const { data: videos } = await supabase
        .from("videos")
        .select(`name, pixel_width, pixel_height`)
        .order("id", { ascending: false })

    return {
        props: {
            videos,
        }
    }
}
