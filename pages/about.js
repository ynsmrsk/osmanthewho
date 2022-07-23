import Head from "next/head"
import Layout from "components/constants/Layout"

export default function About() {
	return (
		<Layout>
			<Head>
				<title>About Osman Işık</title>
			</Head>

			<section className="about-hero">
				<h1><span>filmmaker</span></h1>
				<h1><span>creative</span></h1>
				<h1><span>director</span></h1>
				<h1><span>editor</span></h1>
			</section>

			<section className="about-photo full-bleed">
				<div className="about-linear-gradient-div-top"></div>
				<div className="about-linear-gradient-div-bottom"></div>
				<img src="/images/osman.jpg" alt="Osman Işık" />
			</section>

			<section className="intro">
				<div className="intro-text">
					<p>
						I promote living the life to the fullest and seeing the world
						through an optimistic lens.
					</p>
					<p>
						My name is Osman. I'm a video creator based in Turkey.
						I work directly with clients from concept to final delivery.
						Each project is produced through me and my team.
						I create stylized and engaging content for brands, events, and celebrities.
						Hit me up if you wanna collaborate!
					</p>
				</div>
			</section>
		</Layout>
	)
}
