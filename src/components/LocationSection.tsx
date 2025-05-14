import { HOTEL_ADDRESS, HOTEL_NAME } from '../pages/HomePage';
import KaKaoMap from './KaKaoMap';

export default function LocationSection() {
	const onClickNaverMap = () => {
		window.open(
			`https://map.naver.com/v5/search/${HOTEL_ADDRESS}`,
			'_blank'
		);
	};

	const onClickKakaoMap = () => {
		window.open(
			`https://map.kakao.com/link/search/${HOTEL_NAME}`,
			'_blank'
		);
	};

	return (
		<section className="p-6 bg-gray-50">
			<h2 className="text-xl font-bold mb-2">위치</h2>
			<p className="mb-2 text-gray-700">{HOTEL_ADDRESS} {HOTEL_NAME}</p>
			<KaKaoMap />
			<footer className='flex justify-center items-center gap-8 mt-4 p-3'>
				<button type='button' onClick={onClickNaverMap}>
					<img src='/naver_icon.png' alt='naver' width={40} />
				</button>
				<button type='button' onClick={onClickKakaoMap}>
					<img src='/kakao_icon.png' alt='kakao' width={40} />
				</button>
			</footer>
		</section>
	);
}