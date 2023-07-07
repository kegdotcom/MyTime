import Viewpane from "../components/Viewpane";

interface TodayProps {
  darkMode?: boolean;
}

function Today({ darkMode = false }: TodayProps) {
  return (
    <Viewpane darkMode={darkMode}>
      <h1>Today</h1>
      <p>Here are your tasks for today:</p>
      <p>stuff here i guess</p>
    </Viewpane>
  );
}

export default Today;
