import Viewpane from "../components/Viewpane";

interface CalendarProps {
  darkMode?: boolean;
}

function Calendar({ darkMode = false }: CalendarProps) {
  return (
    <Viewpane darkMode={darkMode}>
      <h1>Calendar View</h1>
      <p>This is the calendar you have.</p>
    </Viewpane>
  );
}

export default Calendar;
