import { useEffect, useRef } from 'react';
import { HOTEL_NAME } from '../pages/HomePage';

export default function KaKaoMap() {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (window.kakao && window.kakao.maps && mapRef.current) {
			const position = new window.kakao.maps.LatLng(37.1275561880418, 128.21896436965);
			const options = {
				center: position,
				level: 3,
			};
			new window.kakao.maps.Map(mapRef.current, options);

			const map = new window.kakao.maps.Map(mapRef.current, options);

			const marker = new window.kakao.maps.Marker({
				position: position,
			});
			marker.setMap(map);

			const infowindow = new window.kakao.maps.InfoWindow({
				content:
					`
						<div style="padding:10px; width: 170px;">
							<p style="font-weight: bold;">${HOTEL_NAME}</p>
							<div style="display: flex; justify-content: space-between; align-items: center;">
								<a href="https://map.kakao.com/link/search/${HOTEL_NAME}" style="color:blue" target="_blank">
									큰지도보기
								</a>
								|
								<a href="https://map.kakao.com/link/to/${HOTEL_NAME},37.1275561880418,128.21896436965" style="color:blue" target="_blank">
									길찾기
								</a>
							</div>
						</div>
					`,
			});

			infowindow.open(map, marker);
		}
	}, []);

	return (
		<div ref={mapRef} className='w-full h-80'></div>
	);
}