import { HOTEL_NAME } from '../pages/HomePage';

export default function Header() {
	return (
		<header className="bg-[#5D4037] text-white p-4">
			<h1 className="text-2xl font-bold">{HOTEL_NAME}</h1>
			<p className="text-sm">도심 속 조용한 쉼터</p>
		</header>
	)
}