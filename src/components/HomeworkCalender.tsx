import React, { useState } from 'react';
import { Calendar, momentLocalizer, View } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { homeworkData } from '../data/homeworkData';
import '../app.css';


// Setup localizer
const localizer = momentLocalizer(moment);

// Define class colors
const classColors: { [className: string]: string } = {
    'Computer Programming II': '#ba6a8d',
    'Comp & Info Design III': '#7b824d',
    'Univ101': '#f7f1ad',
    'Biology': '#bd4042',
    'Calculus III': '#f2cede',
    'English 103': '#b9abd9',
};

// Define custom event type extending the default event
interface CustomEvent {
    id: number;
    title: string;
    start: Date;
    end: Date;
    allDay: boolean;
    className: string;
    testsQuizzes: boolean; // Whether the event is a test or quiz
}

// Convert Homework Data to Calendar Events
const events: CustomEvent[] = homeworkData.map((hw) => ({
    id: hw.id,
    title: hw.assignment,
    start: moment(hw.dueDate, 'MM/DD/YYYY hh:mm A').toDate(),
    end: moment(hw.dueDate, 'MM/DD/YYYY hh:mm A').toDate(),
    allDay: false,
    className: hw.class, // Store class name for styling
    testsQuizzes: hw.testsQuizzes || false, // Track if it's a test
}));

const HomeworkCalendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [view, setView] = useState<View>('month');

    // Function to style events based on class and test status
    const eventPropGetter = (event: CustomEvent) => {
        const backgroundColor = classColors[event.className] || '#ccc'; // Default color based on class
        const textColor = event.className === 'Univ101' ? '#000' : '#fff'; // Black text for Univ101, white for others

        return {
            style: {
                backgroundColor,
                color: textColor,
                borderRadius: '5px',
                border: 'none',
                padding: '5px',
                fontSize: '12px',
                whiteSpace: 'normal', // Allow full text wrapping
            },
        };
    };

    // Style for days with tests (dark red background) and the day before (light red)
    const dayPropGetter = (date: Date) => {
        const dateString = moment(date).format('MM/DD/YYYY'); // Format the date to match the due date format

        // Check if any event is a test on this day
        const isTestDay = events.some(
            (event) => moment(event.start).format('MM/DD/YYYY') === dateString && event.testsQuizzes
        );

        // Check if the day before is a test day
        const isDayBeforeTest = events.some(
            (event) => moment(event.start).subtract(1, 'days').format('MM/DD/YYYY') === dateString && event.testsQuizzes
        );

        return {
            style: {
                backgroundColor: isTestDay ? '#c43f33' : isDayBeforeTest ? '#f26f63' : '', // Dark red for test day, light red for day before
            },
        };
    };

    return (
        <div style={{ height: 600, marginTop: '90px' }}>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                date={currentDate}
                onNavigate={(newDate) => setCurrentDate(newDate)}
                onView={(newView) => setView(newView)}
                view={view}
                eventPropGetter={eventPropGetter} // Apply colors and text styles to events
                dayPropGetter={dayPropGetter} // Apply background color to the entire day
                popup={true} // Disable the popup to show all events inline
                style={{ width: '100%' }}

            />
        </div>
    );
};

export default HomeworkCalendar;
