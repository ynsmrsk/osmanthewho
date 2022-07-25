import { useEffect, forwardRef } from "react"
import gsap from "gsap"

const MouseMoveScroll = forwardRef(({ children }, holder) => {
	useEffect(() => {
		let overflowX, mapPositionX, overflowY, mapPositionY, x, y

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
				x = e.clientX || (e.changedTouches && e.changedTouches[0].clientX) || 0
				y = e.clientY || (e.changedTouches && e.changedTouches[0].clientY) || 0
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
		if (typeof window !== "undefined") {
			if (window.innerWidth < 768) {
				document.removeEventListener("mousemove", onMouseMove)
			}
		}
		onResize()

		return () => {
			window.removeEventListener("resize", onResize)
			document.removeEventListener("mousemove", onMouseMove)
		};
	}, [])

	return (
		<div id="wrapper">
			<div id="container">
				<div id="holder" ref={holder}>
					{children}
				</div>
			</div>
		</div>
	)
})

export { MouseMoveScroll }