import { useState, useEffect, useRef } from "react"
import Head from "next/head"
import Image from "next/image"
import Layout from "components/constants/Layout"
import Productions from "components/productions/Productions"
import { TextReveal, TextRevealPinned } from "components/animations/TextReveal"
import { Parallax, ParallaxOverflow } from "components/animations/Parallax"
import { FadeIn, FadeInStagger } from "components/animations/FadeIn"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import ReelModal from "components/modal/ReelModal"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
	const [open, setOpen] = useState(false)
	const plus = useRef(null)
	const overlay = useRef(null)
	useEffect(() => {
		let video = document.querySelector("video")
		window.addEventListener("scroll", function () {
			video.style.opacity = `${0.7 + window.scrollY / -1000}`
		})

		const animation = gsap.to(plus.current, {
			scale: 100,
			scrollTrigger: {
				trigger: overlay.current,
				start: "top top",
				end: "bottom top",
				scrub: true,
				pin: true,
			},
		})
		return () => animation.scrollTrigger.kill()
	}, [])

	return (
		<Layout>
			<Head>
				<title>Osman Işık | Film Creator</title>
				<link rel="icon" href="/images/favicon.ico" />
			</Head>
			<section className="landing full-bleed">
				<video
					className="video-full-screen"
					src="/images/showreel.mp4"
					muted
					playsInline
					autoPlay
					loop
				/>

				<div className="index-linear-gradient-div-top"></div>
				<div className="index-linear-gradient-div-bottom"></div>

				<div className="landing-content">
					<div className="landing-content-title-container">
						<h1 className="landing-content-title">
							<span className="title-word">stay</span>
							<span className="title-word">wild</span>
						</h1>
						<h1 className="landing-content-title">
							<span className="title-word">have</span>
							<span className="title-word">move</span>
						</h1>
					</div>
					<ReelModal open={open} setOpen={setOpen} />
					<button className="watch-showreel-btn" onClick={() => setOpen(true)}>
						watch showreel
					</button>
				</div>
			</section>

			<section className="self-intro">
				<TextReveal>
					<p>
						I promote living life to the fullest and <br />
						seeing the world through an optimistic lens.
					</p>
					<p>
						My name is Osman. I'm a video creator based in Turkey.
						I work directly with clients from concept to final delivery.
					</p>
					<p>
						I create stylized and engaging content for brands,
						events, and celebrities. Hit me up if you wanna collaborate!
					</p>
				</TextReveal>
			</section>

			<section className="skills">
				<TextRevealPinned>
					<h3>what i do</h3>
					<h3>i make films</h3>
					<h3>creative direction</h3>
					<h3>content production</h3>
					<h3>directory of photography</h3>
				</TextRevealPinned>
				<Parallax>
					<div id="img-wrapper_1-1" className="image-wrapper" data-speed="0.2">
						<ParallaxOverflow>
							<Image
								src="/images/skills/1-1.webp"
								objectFit="contain"
								width="1366"
								height="570"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_1-2" className="image-wrapper" data-speed="0.2">
						<ParallaxOverflow>
							<Image
								src="/images/skills/1-2.webp"
								objectFit="contain"
								width="640"
								height="360"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_1-3" className="image-wrapper" data-speed="0.2">
						<ParallaxOverflow>
							<Image
								src="/images/skills/1-3.webp"
								objectFit="contain"
								width="519"
								height="369"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_1-4" className="image-wrapper" data-speed="0.9">
						<ParallaxOverflow>
							<Image
								src="/images/skills/1-4.webp"
								objectFit="contain"
								width="750"
								height="336"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_2-1" className="image-wrapper" data-speed="0.7">
						<ParallaxOverflow>
							<Image
								src="/images/skills/2-1.webp"
								objectFit="contain"
								width="1080"
								height="1350"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_2-2" className="image-wrapper" data-speed="0.6">
						<ParallaxOverflow>
							<Image
								src="/images/skills/2-2.webp"
								objectFit="contain"
								width="640"
								height="800"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_2-3" className="image-wrapper" data-speed="0.5">
						<ParallaxOverflow>
							<Image
								src="/images/skills/2-3.webp"
								objectFit="contain"
								width="750"
								height="938"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_2-4" className="image-wrapper" data-speed="1.2">
						<ParallaxOverflow>
							<Image
								src="/images/skills/2-4.webp"
								objectFit="contain"
								width="640"
								height="729"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_3-1" className="image-wrapper" data-speed="0.8">
						<ParallaxOverflow>
							<Image
								src="/images/skills/3-1.webp"
								objectFit="contain"
								width="480"
								height="853"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_3-2" className="image-wrapper" data-speed="1.2">
						<ParallaxOverflow>
							<Image
								src="/images/skills/3-2.webp"
								objectFit="contain"
								width="640"
								height="1138"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
					<div id="img-wrapper_3-3" className="image-wrapper" data-speed="1.1">
						<ParallaxOverflow>
							<Image
								src="/images/skills/3-3.webp"
								objectFit="contain"
								width="320"
								height="569"
								priority="true"
								alt="Osman Işık's photo"
							/>
						</ParallaxOverflow>
					</div>
				</Parallax>
			</section>

			<section className="brands">
				<FadeIn>
					<h4>
						I've worked with great artists and brands. There is love for them
						all.
					</h4>
					<hr />
				</FadeIn>
				<FadeInStagger>
					<div className="brand-image"><img src="/images/brands/xiaomi.png" alt="Xiaomi" /></div>
					<div className="brand-image"><img src="/images/brands/coca-cola.png" alt="Coca Cola" /></div>
					<div className="brand-image"><img src="/images/brands/red-bull.png" alt="Red Bull" /></div>
					<div className="brand-image"><img src="/images/brands/corona.png" alt="Corona" /></div>
					<div className="brand-image"><img src="/images/brands/tefal.png" alt="Tefal" /></div>
					<div className="brand-image"><img src="/images/brands/samsung.png" alt="Samsung" /></div>
					<div className="brand-image"><img src="/images/brands/trt.png" alt="TRT" /></div>
					<div className="brand-image"><img src="/images/brands/starbucks.png" alt="Starbucks" /></div>
					<div className="brand-image"><img src="/images/brands/aydin-dogan.png" alt="Aydın Doğan Vakfı" /></div>
					<div className="brand-image"><img src="/images/brands/spx.png" alt="SPX" /></div>
				</FadeInStagger>
			</section>

			<section className="featured-productions full-bleed">
				<div className="overlay" ref={overlay}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 4519 3213"
						preserveAspectRatio="xMidYMid slice"
						className="plus"
						ref={plus}
					>
						<path
							fill="black"
							d="M4519,0 L4519,3213 L0,3213 L0,0 L4519,0 Z M2322,1587.74993 L2278.24999,1587.74999 L2278.25006,1544 L2240.75003,1544 L2240.74994,1587.75003 L2197,1587.75011 L2197,1625.24989 L2240.74991,1625.25007 L2240.75008,1669 L2278.24992,1669 L2278.24996,1625.25003 L2322,1625.24999 L2322,1587.74993 Z"
							fillRule="evenodd"
						></path>
					</svg>
				</div>
				<Productions />
			</section>
		</Layout>
	)
}
