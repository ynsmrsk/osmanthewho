import Head from 'next/head'
import Layout from '../components/constants/Layout'
import SmoothScroll from '../components/constants/SmoothScroll'

export default function Home() {
  return (
		<Layout>
			<SmoothScroll>
				<div className='landing full-bleed'>
					<video muted playsInline autoPlay loop className="video-full-screen" src="/showreel.m4v" />
					<div className='landing-content'>
						<h1 className="landing-content-title">BE WILD HAVE MOVE</h1>
						<p className="landing-content-subtitle">Kurumus bogazim apple adobe gotten skm</p>
					</div>
				</div>
				<div className="skills">
					<h1>skills goes here.</h1>
				</div>
			</SmoothScroll>
		</Layout>
  )
}
