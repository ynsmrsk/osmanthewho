import Head from "next/head"
import Layout from "../components/constants/Layout"

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
				<img src="/images/osman.jpeg" alt="Osman Işık" />
			</section>

			<section className="intro">
				 <div className="intro-text">
					  <p>
						  I promote living the life to the fullest and seeing the world
						  through an optimistic lens.
					  </p>
					  <p>
						  I'm Osman Işık. I'm a filmmaker, photographer, designer and director
						  in Turkey. I produce commercial videos and social media content for brands.
						  You can visit my{" "}
						  <a href="https://www.instagram.com/osmanthewho" target="_blank">
							  Instagram
						  </a>{" "}
						  account to see my jobs. I'm available for freelance work.
					  </p>
				 </div>
			</section>
		</Layout>
	)
}
