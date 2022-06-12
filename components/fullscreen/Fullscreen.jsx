import { useState } from 'react';

export default function Fullscreen() {
	const [isFullscreen, setIsFullscreen] = useState(false)

	const toggleFullscreen = () => {
		if (isFullscreen) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
		setIsFullscreen(!isFullscreen);
	}

	return (
		<div className="fullscreen-wrapper" onClick={toggleFullscreen}>
			{
				isFullscreen ? (
					<img src="/icons/fullscreen-close.svg" className="fullscreen-close" alt="close fullscreen icon" />
				) : (
					<img src="/icons/fullscreen-open.svg" className="fullscreen-open" alt="open fullscreen icon" />
				)
			}
		</div>
	)
}
