import Head from "next/head"
import Navigation from "components/header/navigation/Navigation"
import Logo from "components/header/logo/Logo"
import Footer from "components/footer/Footer"
import ContactModal from "components/modal/ContactModal"

export default function Layout({ children }) {
	return (
		<div className="layout-container">
			<Head>
				<title>Osman Işık | Film Creator</title>
				<link rel="icon" href="/images/favicon.ico" />
				<meta name="description" content="Osman Işık | Video Creator, Filmmaker, Director." />
				<meta name="keywords" content="video creator filmmaker photographer director filmmaking" />
			</Head>
			<Logo />
			<Navigation />
			{children}
			<Footer />
			<ContactModal />
		</div>
	)
}
