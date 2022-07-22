import { useEffect, useRef } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import useLayoutEffect from '@components/constants/UseIsomorphicLayoutEffect'

gsap.registerPlugin(ScrollTrigger)

export function TextReveal({ children }) {
	const el = useRef(null)

	useLayoutEffect(() => {
		const duration = 0.7
		const animations = []
		const elements = gsap.utils.toArray(el.current.children)
		const offset = elements[1].offsetTop - elements[0].offsetTop
		elements.forEach((element) => {
			const animation = gsap.to(element, {
				opacity: 1,
				scrollTrigger: {
					trigger: element,
					start: "center center+=" + (offset / 2),
					end: "center center-=" + (offset / 2),
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

		return () => {
			animations.forEach((animation) => animation.scrollTrigger.kill())
		}
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

		return () => {
			animations.forEach((animation) => animation.scrollTrigger.kill())
		}
	}, [])

	return <div ref={el}>{children}</div>
}
