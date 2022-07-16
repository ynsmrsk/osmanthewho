import { useEffect, useState } from 'react';

export default function useWindowWidth() {
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return width
}