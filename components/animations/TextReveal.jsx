import { useEffect, useRef } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function TextReveal({ children }) {
	const el = useRef(null)

	useEffect(() => {
		const duration = 0.7
		const animations = []
		setTimeout(() => {
			const elements = gsap.utils.toArray(el.current.children)
			const offset = elements[0].offsetHeight / 2
			elements.forEach((element) => {
				const animation = gsap.to(element, {
					opacity: 1,
					scrollTrigger: {
						trigger: element,
						start: "center center+=" + offset,
						end: "center center-=" + offset,
						markers: true,
						onEnter: () => {
							gsap.to(element, {
								y: -50,
								duration,
								opacity: 1,
							})
						},
						onLeave: () => {
							gsap.to(element, {
								y: -100,
								duration,
								opacity: 0
							})
						},
						onEnterBack: () => {
							gsap.to(element, {
								y: -50,
								duration,
								opacity: 1
							})
						},
						onLeaveBack: () => {
							gsap.to(element, {
								y: 0,
								duration,
								opacity: 0
							})
						},
					}
				})

				animations.push(animation)
			})
		}, 2000)
		return () => animations.forEach((animation) => animation.scrollTrigger.kill())
	}, [])

	return <div ref={el}>{children}</div>
}

export function TextRevealPinned({ children }) {
	const el = useRef()

	useEffect(() => {
		const animations = []
		const elements = gsap.utils.toArray(el.current.children)
		elements.forEach((element) => {
			const animation = gsap.timeline({
				scrollTrigger: {
					trigger: element,
					start: "center center",
					end: "+=" + (window.innerHeight * 0.5),
					scrub: true,
					pin: true,
				}
			})
				.from(element, { opacity: 0 })
				.to(element, { opacity: 1 })
				.to(element, { opacity: 0 })

			animations.push(animation)
		})

		return () => animations.forEach((animation) => animation.scrollTrigger.kill())
	}, [])

	return <div ref={el}>{children}</div>
}
