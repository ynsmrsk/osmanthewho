import Head from "next/head"
import Navigation from "components/header/navigation/Navigation"
import Logo from "components/header/logo/Logo"
import Footer from "components/footer/Footer"
import Fullscreen from "components/fullscreen/Fullscreen"
import ContactModal from "components/modal/ContactModal"

export default function Layout({ children }) {
	return (
			<div className="layout-container">
				<Head>
					<title>Osman Işık | Film Creator</title>
					<link rel="icon" href="/images/favicon.ico" />
				</Head>
				<Logo />
				<Navigation />
				{children}
				<Footer />
				<Fullscreen />
				<ContactModal />
			</div>
	)
}
