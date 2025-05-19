import { motion } from 'framer-motion';

const CONTENT_ARRAY = [
	'안녕하세요',
	'그동안 안부를 전하지 못했지만 늘 마음으로 가까이 있었습니다.',
	'1년이 넘는 시간동안 정성을 다해 리모델링을 진행한 끝에 드디어 호텔이 새로운 모습으로 여러분을 맞이할 준비를 마쳤습니다.',
	'공사기간 동안 응원해주시고 기다려주신 분들께 진심어린 감사의 마음을 전합니다. 그 따뜻한 마음들이 큰 힘이 되어 지금 이 자리에 설 수 있었습니다.',
	'이에 조심스레 개업 소식을 전하며 그 동안의 감사의 마음을 담아 소박한 초대의 자리를 마련하고자 합니다.',
	'바쁘시겠지만 잠시 들러 새롭게 단장한 공간에서 차 한잔 나누며 이야기 나눌 수 있으면 좋겠습니다.',
];

export default function OpenningMessage() {
	return (
		<section className="w-full mx-auto">
			<div className='max-w-2xl p-6 m-4 rounded-lg shadow'>
				<header className="mb-6 text-center">
					<h1 className="text-xl font-bold text-primary-700">인사말</h1>
				</header>
				<article className="space-y-4 leading-relaxed text-gray-800 text-md">
					{CONTENT_ARRAY.map((content, index) => (
						<motion.p
							key={index}
							initial={{ opacity: 0, y: 10 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.6 }}
							transition={{ delay: index * 0.2 + 0.2, duration: 0.5 }}
						>
							{content}
						</motion.p>
					))}
					<motion.p
						className="mt-6 text-base text-right text-gray-500"
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.7, duration: 0.5 }}
					>
						대표이사 김 희 택 올림
					</motion.p>
				</article>
				<footer className="pt-6 mt-8 border-t">
					<dl className="grid [grid-template-columns:1fr_2fr] gap-x-2 gap-y-2 text-gray-700 mb-4">
						<dt className="font-semibold">프리 오픈</dt>
						<dd>2025년 5월 21일</dd>
						<dt className="font-semibold">그랜드 오픈</dt>
						<dd>2025년 5월 30일 (오후2시)</dd>
						<dt className="font-semibold">장소</dt>
						<dd>제천시 화산동 986 브라운도트 제천화산점</dd>
					</dl>
				</footer>
			</div>
		</section>
	);
}