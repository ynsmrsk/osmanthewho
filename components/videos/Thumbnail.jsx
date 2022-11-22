import Link from "next/link";
import { useEffect, useState, useRef } from 'react'
import { getThumbnailImage, getThumbnailVideo } from "utils/get-files";

export default function Thumbnail({ videoName, width, height, x, y }) {
    const video = useRef(null)
    const [focus, setFocus] = useState(false)

    useEffect(() => {
        if (window.innerWidth > 768) {
            if (focus) video.current.play()
            else {
                video.current.pause()
                video.current.load()
            }
        }
    }, [focus])

    const styles = {
        width: `${width}vw`,
        height: `${height}vw`,
        left: `${x}px`,
        top: `${y}px`,
    }

    return (
        typeof window !== "undefined" && window.innerWidth < 768 ? (
            <div
                className="thumbnail"
                style={styles}
                data-size={width}
            >
                <Link href={`/works/${videoName}`}>
                    <a>
                        <img
                            src={getThumbnailImage(videoName)}
                            alt="Osmanthewho videos thumbnail image"
                        />
                    </a>
                </Link>
            </div>
        ) : (
            <div
                className="thumbnail"
                style={styles}
                data-size={width}
                onMouseOver={() => setFocus(true)}
                onMouseOut={() => setFocus(false)}
            >
                <Link href={`/works/${videoName}`}>
                    <a>
                        <video
                            ref={video}
                            className="thumbnailVideo"
                            loop={true}
                            muted={true}
                            playsInline={true}
                            src={getThumbnailVideo(videoName)}
                            poster={getThumbnailImage(videoName)}
                        />
                    </a>
                </Link>
            </div>
        )
    )
}