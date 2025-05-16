import { HOTEL_EMAIL, HOTEL_PHONE } from '../pages/HomePage';

export default function Aside() {
	return (
		<aside className="p-6">
			<h2 className="text-xl font-bold mb-2">예약 및 문의</h2>
			<p className="text-gray-700">전화: {HOTEL_PHONE}</p>
			<p className="text-gray-700">이메일: {HOTEL_EMAIL}</p>
		</aside>
	);
}