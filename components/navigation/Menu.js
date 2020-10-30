import Link from 'next/link'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'

export default function Menu({ isMenuOpen }) {

	const menuVariants = {
		open: {
			right: 0,
			transition: {
				duration: 0.5,
				staggerChildren: 0.15,
				delayChildren: 0.7,
			}
		},
		closed: {
			right: '-100vw',
			transition: {
				delay: 0.7,
				duration: 0.5,
				staggerChildren: 0.15,
				staggerDirection: -1,
			}
		}
	}

	const links = ['Home', 'About', 'Contact', 'Work']

	return (
			<motion.nav
				className='nav'
				initial={false}
				animate={ isMenuOpen ? 'open' : 'closed' }
			  variants={menuVariants}
			>
				<ul>
					{ links.map((link, i) => (
						<MenuItem link={link} key={i} />
					)) }
				</ul>
			</motion.nav>
	)
}

