import { useState, useEffect, useRef } from 'react'
import ProductionList from "../productionList/ProductionList"
import { FadeIn } from "../animations/FadeIn"
import VideoModal from "../modal/VideoModal"
import {
	allProductions,
	commercialProductions,
	creativeProductions,
	musicVideoProductions,
} from "../../production-data"

export default function Productions() {
	const [selected, setSelected] = useState("all")
	const dataArray = new Array(7)
	const [data, setData] = useState(dataArray)
	const [open, setOpen] = useState(false)
	const [url, setUrl] = useState()
	const [title, setTitle] = useState()
	const [itemsPerPage, setItemsPerPage] = useState(6)
	let slice = data.slice(0, itemsPerPage)
	const viewMoreRef = useRef(null)
	const viewMore = () => setItemsPerPage(prevItemsPerPage => prevItemsPerPage + 6)

	useEffect(() => {
		itemsPerPage < data.length ? viewMoreRef.current.style.display = "block" : viewMoreRef.current.style.display = "none"
	}, [itemsPerPage, data])

	const videoTypes = [
		{ id: "all", title: "All" },
		{ id: "commercial", title: "Commercial" },
		{ id: "creative", title: "Creative" },
		{ id: "music-video", title: "Music Video" },
	]

	useEffect(() => {
		switch (selected) {
			case "all": setData(allProductions); break;
			case "commercial": setData(commercialProductions); break;
			case "creative": setData(creativeProductions); break;
			case "music-video": setData(musicVideoProductions); break;
			default: setData(allProductions);
		}
	}, [selected])

	return (
		<div className="productions" id="productions">
			<FadeIn>
				<h4>my works</h4>
			</FadeIn>
			<FadeIn>
				<h2>Featured Productions</h2>
			</FadeIn>

			<ul>
				{videoTypes.map(item => (
					<ProductionList
						key={item.id}
						id={item.id}
						title={item.title}
						active={selected === item.id}
						setSelected={setSelected}
						setItemsPerPage={setItemsPerPage}
					/>
				))}
			</ul>

			<hr />

			<VideoModal open={open} setOpen={setOpen} url={url} title={title} />

			<div className="production-list-container">
				{slice.map((data, index) => (
					<div
						key={index}
						className="item"
						onClick={() => {
							setOpen(true)
							setUrl(data.url)
							setTitle(data.title)
						}}
					>
						<img src={data.img} alt={`${data.title}`} />
						<span>{data.title}</span>
					</div>
				))}
			</div>

			<button
				className="view-more-btn"
				onClick={() => viewMore()}
				ref={viewMoreRef}
			>
				view more
			</button>
		</div>
	)
}
