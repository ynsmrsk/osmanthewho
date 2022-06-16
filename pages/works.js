import { useEffect, useState, useRef } from "react"
import { Swing } from "../components/animations/Swing"
import { MouseMoveScroll } from "../components/animations/MouseMoveScroll"
import { data } from "../components/selectedWorks/selected-works-data"
import Thumbnail from "../components/selectedWorks/Thumbnail"

export default function Works() {
	const [thumbnails, setThumbnails] = useState([])
	const thumbnailList = []
	const minWidth = 30
	const maxWidth = 60
	const holder = useRef(null)

	const createThumbnail = () => {
		const randWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth
		const randHeight = Math.floor(randWidth * 0.5625)
		const pixelWidth = (document.documentElement.clientWidth * randWidth) / 100
		const pixelHeight = (document.documentElement.clientWidth * randHeight) / 100

		function getRandom(min, max) {
			return Math.random() * (max - min) + min
		}

		const randX = getRandom(
			pixelWidth * 0.5,
			holder.current.offsetWidth - pixelWidth * 1.5
		)
		const randY = getRandom(
			pixelHeight,
			holder.current.offsetHeight - pixelHeight * 2
		)

		let minDistanceX
		let minDistanceY

		let overlap = false
		for (let i = 0; i < thumbnailList.length; i++) {
			const other = thumbnailList[i]

			if (other.pixelWidth > pixelWidth) {
				minDistanceX = other.pixelWidth / 1.25
				minDistanceY = other.pixelHeight / 1.25
			} else {
				minDistanceX = pixelWidth / 1.25
				minDistanceY = pixelHeight / 1.25
			}

			let distanceX = Math.abs(other.randX - randX)
			let distanceY = Math.abs(other.randY - randY)

			if (distanceX <= minDistanceX && distanceY <= minDistanceY) {
				overlap = true
				break
			}
		}

		if (!overlap) {
			thumbnailList.push({
				randWidth,
				randHeight,
				pixelWidth,
				pixelHeight,
				randX,
				randY,
			})
		}
	}

	useEffect(() => {
		let protection = 0

		while (thumbnailList.length < data.length) {
			createThumbnail()

			protection++
			if (protection > 1000000) break
		}
		setThumbnails(thumbnailList)
	}, [])

	return (
		<MouseMoveScroll ref={holder}>
			{thumbnails.length ? (
				<Swing>
					{thumbnails.map((thumbnail, i) => (
						<Thumbnail
							key={i}
							randWidth={thumbnail.randWidth}
							randHeight={thumbnail.randHeight}
							randX={thumbnail.randX}
							randY={thumbnail.randY}
							title={data[i].title}
							img={data[i].img}
							url={data[i].url}
						></Thumbnail>
					))}
				</Swing>
			) : null}
		</MouseMoveScroll>
	)
}
