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
				let x =
					e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0
				let y =
					e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0
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
		document.addEventListener("pointermove", onMouseMove)
		onResize()
	}, [])

	return (
		<div style={styles.wrapper}>
			<div style={styles.container}>
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
		overflow: "hidden",
		position: "relative",
	},
	container: {
		position: "absolute",
		left: "50%",
		top: "50%",
		transform: "translate(-50%,-50%)",
	},
	holder: {
		width: "170vw",
		height: "400vh",
		willChange: "transform",
	},
}

export { MouseMoveScroll }