import { useEffect, forwardRef } from "react"
import gsap from "gsap"

const MouseMoveScroll = forwardRef(({ children }, holder) => {
	useEffect(() => {
		let overflowX, mapPositionX, overflowY, mapPositionY

		function onResize() {
			overflowX = holder.current.offsetWidth - window.innerWidth
			overflowY = holder.current.offsetHeight - window.innerHeight
			mapPositionX = gsap.utils.mapRange(
				0,
				window.innerWidth,
				overflowX / 2,
				overflowX / -2
			)
			mapPositionY = gsap.utils.mapRange(
				0,
				window.innerHeight,
				overflowY / 2,
				overflowY / -2
			)
		}

		function onMouseMove(e) {
			if (overflowX > 0 || overflowY > 0) {
				let x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0
				let y = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0
				gsap.to(holder.current, {
					duration: 7,
					overwrite: true,
					ease: "power3",
					x: mapPositionX(x),
					y: mapPositionY(y),
				})
			}
		}

		window.addEventListener("resize", onResize)
		document.addEventListener("mousemove", onMouseMove)
		onResize()
	}, [])

	return (
		<div className="noise-background" className="full-bleed" style={styles.wrapper}>
			<div className="noise-background" style={styles.container}>
				<div style={styles.holder} ref={holder}>
					{children}
				</div>
			</div>
		</div>
	)
})

const styles = {
	wrapper: {
		width: "100vw",
		height: "100vh",
		position: "relative",
		overflow: "hidden",
		backgroundColor: "#080808"
	},
	container: {
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%,-50%)",
	},
	holder: {
		width: "200vw",
		height: "450vh",
		willChange: "transform",
	},
}

export { MouseMoveScroll }