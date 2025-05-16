import { deluexA, deluexB, premium, standard, suite, twin } from '../util/images';
import ImageSlide from './ImageSlide';

export default function RoomInfoSection() {
	return (
		<section className="p-6 bg-gray-50">
			<h2 className="text-xl font-bold mb-4">객실 안내</h2>
			<div className="space-y-4">
				<div className="bg-white shadow rounded p-4">
					<h3 className="font-semibold text-lg">스탠다드</h3>
					<ImageSlide images={standard} />
				</div>
				<div className="bg-white shadow rounded p-4">
					<h3 className="font-semibold text-lg">디럭스 A</h3>
					<ImageSlide images={deluexA} />
				</div>
				<div className="bg-white shadow rounded p-4">
					<h3 className="font-semibold text-lg">디럭스 B</h3>
					<ImageSlide images={deluexB} />
				</div>
				<div className="bg-white shadow rounded p-4">
					<h3 className="font-semibold text-lg">트윈</h3>
					<ImageSlide images={twin} />
				</div>
				<div className="bg-white shadow rounded p-4">
					<h3 className="font-semibold text-lg">프리미엄</h3>
					<ImageSlide images={premium} />
				</div>
				<div className="bg-white shadow rounded p-4">
					<h3 className="font-semibold text-lg">스위트</h3>
					<ImageSlide images={suite} />
				</div>
			</div>
		</section>
	);
}
