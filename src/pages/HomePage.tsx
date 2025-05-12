export default function HomePage() {
	return (
		<main className="bg-white text-gray-800 font-sans">

			<header className="bg-indigo-600 text-white p-4">
				<h1 className="text-2xl font-bold">작은 호텔 이름</h1>
				<p className="text-sm">도심 속 조용한 쉼터</p>
			</header>

			<section>
				<img src="https://kr.object.ncloudstorage.com/gandi-cdn/sample/hotel1.jpeg" alt="호텔 전경" className="w-full h-48 object-cover" />
			</section>

			<section className="p-6">
				<h2 className="text-xl font-bold mb-2">호텔 소개</h2>
				<p className="text-gray-700">
					우리 호텔은 편안한 분위기와 세심한 서비스를 제공하는 소규모 부티크 호텔입니다.
					관광명소와 가까우며, 조용한 휴식을 원하는 여행자에게 최적입니다.
				</p>
			</section>

			<section className="p-6 bg-gray-50">
				<h2 className="text-xl font-bold mb-4">객실 안내</h2>
				<div className="space-y-4">
					<div className="bg-white shadow rounded p-4">
						<h3 className="font-semibold text-lg">스탠다드 룸</h3>
						<p className="text-sm text-gray-600">아늑한 침대와 욕실이 포함된 기본 객실</p>
					</div>
					<div className="bg-white shadow rounded p-4">
						<h3 className="font-semibold text-lg">디럭스 룸</h3>
						<p className="text-sm text-gray-600">조금 더 넓고 고급스러운 분위기의 객실</p>
					</div>
				</div>
			</section>

			<section className="p-6">
				<h2 className="text-xl font-bold mb-2">편의 시설</h2>
				<ul className="list-disc pl-5 text-gray-700 space-y-1">
					<li>무료 Wi-Fi</li>
					<li>조식 서비스</li>
					<li>셀프 체크인</li>
					<li>공용 주방</li>
				</ul>
			</section>

			<section className="p-6 bg-gray-50">
				<h2 className="text-xl font-bold mb-2">위치</h2>
				<p className="mb-2 text-gray-700">서울특별시 강남구 예시로 123</p>
				<iframe
					className="w-full h-48 rounded"
					src="https://www.google.com/maps/embed?pb=!1m18..."
					loading="lazy" referrerPolicy="no-referrer-when-downgrade"
				/>
			</section>

			<section className="p-6">
				<h2 className="text-xl font-bold mb-2">예약 및 문의</h2>
				<p className="text-gray-700">전화: 02-123-4567</p>
				<p className="text-gray-700">이메일: hotel@example.com</p>
				<a href="#" className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded">지금 예약하기</a>
			</section>

			<footer className="bg-gray-200 text-center text-sm p-4">
				&copy; 2025 작은 호텔 이름. All rights reserved.
			</footer>

		</main>
	);
}