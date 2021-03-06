import { useEffect, useRef } from "react"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function TextRevealAnimation({ children }) {
	const textRef = useRef(null)
	const duration = 0.7

	useEffect(() => {
		ScrollTrigger.create({
			trigger: textRef.current,
			start: "center 67%",
			end: "center 33%",
			onEnter: () => {
				gsap.to(textRef.current, {
					y: -35,
					duration,
					opacity: 1
				})
			},
			onLeave: () => {
				gsap.to(textRef.current, {
					y: -70,
					duration,
					opacity: 0
				})
			},
			onEnterBack: () => {
				gsap.to(textRef.current, {
					y: 0,
					duration,
					opacity: 1
				})
			},
			onLeaveBack: () => {
				gsap.to(textRef.current, {
					y: 35,
					duration,
					opacity: 0
				})
			},
		})
	}, [])

	return <div style={{ opacity: "0" }} ref={textRef}>{children}</div>
}
