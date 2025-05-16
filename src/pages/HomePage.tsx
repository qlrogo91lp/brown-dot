import AmenitiesInfo from '../components/AmenitiesInfo';
import Aside from '../components/Aside';
import CustomCalendar from '../components/CustomCalendar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ImageSlide from '../components/ImageSlide';
import Introduction from '../components/Introduction';
import LocationSection from '../components/LocationSection';
import OpenningMessage from '../components/OpenningMessage';
import RoomInfoSection from '../components/RoomInfoSection';
import { exteriors } from '../util/images';

export const HOTEL_NAME = '브라운도트 제천화산점';
export const HOTEL_ADDRESS = '충북 제천시 내토로 566';
export const HOTEL_PHONE = '043-756-8000';
export const HOTEL_EMAIL = 'songhawood@naver.com';

export default function HomePage() {
	return (
		<main className="bg-white text-gray-800 font-sans">
			<Header />
			<ImageSlide images={exteriors}/>
			<OpenningMessage />
			<Introduction />
			<RoomInfoSection />
			<AmenitiesInfo />
			<LocationSection />
			<CustomCalendar />
			<Aside />
			<Footer />
		</main>
	);
}