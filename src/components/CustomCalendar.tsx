import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CALENDAR_TYPES } from 'react-calendar/src/shared/const.js';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CustomCalendar() {
	const [value, onChange] = useState<Value>(new Date(2025, 5, 1));

	return (
		<div className='w-full flex justify-center items-center mt-2'>
			<Calendar
				onChange={onChange}
				value={value}
				calendarType={CALENDAR_TYPES.GREGORY}
				next2Label={null}
				prev2Label={null}
				formatDay={(_, date) => date.getDate().toString()}
			/>
		</div>
	);
}
