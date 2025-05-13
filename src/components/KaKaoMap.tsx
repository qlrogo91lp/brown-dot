import { useEffect, useRef } from 'react';

export default function KaKaoMap() {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.kakao && window.kakao.maps && mapRef.current) {
			const options = {
				center: new window.kakao.maps.LatLng(37.1275561880418, 128.21896436965),
				level: 3,
			};
			new window.kakao.maps.Map(mapRef.current, options);
		}
	}, []);

	return (
		<div ref={mapRef} className='w-full h-80'></div>
	);
}