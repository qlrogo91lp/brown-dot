import { HOTEL_NAME } from '../pages/HomePage';

export default function Footer() {
	return (
		<footer className="bg-[#5D4037] text-center text-sm p-4 text-white">
			<p>&copy; {HOTEL_NAME}</p>
			<p>All rights reserved</p>
		</footer>
	);
}