import { useEffect, useRef } from "react"
import gsap from "gsap"
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin"

gsap.registerPlugin(MotionPathPlugin)

export function Swing({ children }) {
	const wrapperRef = useRef(null)

	useEffect(() => {
		const wrapper = wrapperRef.current
		const elements = gsap.utils.toArray(wrapper.children)

		elements.forEach((el) => {
			const size = 100 - el.dataset.size
			gsap.to(el, {
				motionPath: {
					path: [
						{ x: -size / 1.5, y: 0 },
						{ x: -size / 1.5, y: -size / 2 },
						{ x: 0, y: -size / 2 },
						{ x: 0, y: 0 },
					],
					curviness: 1,
				},
				duration: gsap.utils.random(el.dataset.size / 3, el.dataset.size / 2),
				delay: gsap.utils.random(0, 4),
				ease: "none",
				repeat: -1,
			})
		})

		// // parallax pointermove
		// const data = elements.map(el => {
		// 	return {
		// 		left: el.offsetLeft,
		// 		top: el.offsetTop,
		// 		speed: 100 - el.dataset.size,
		// 		tween: gsap.to(el, {x: "+=0", y: "+=0", ease: "expo", duration: el.dataset.size * 0.05, paused: true})
		// 	};
		// });
		// const onMouseMove = (event) => {
		// 	let bounds = wrapper.getBoundingClientRect(),
		// 		pageX = event.pageX - bounds.width * 0.5,
		// 		pageY = event.pageY - bounds.height * 0.5;
		//
		// 	data.forEach(d => {
		// 		d.tween.vars.x = -((d.left + pageX * d.speed) * 0.005) / 2;
		// 		d.tween.vars.y = -(d.top + pageY * d.speed) * 0.005;
		// 		d.tween.invalidate().restart();
		// 	});
		// };
		// document.addEventListener("pointermove", onMouseMove)
	}, [])

	return <div ref={wrapperRef}>{children}</div>
}
