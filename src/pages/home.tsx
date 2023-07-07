import Icon from "../components/Icon";
import Viewpane from "../components/Viewpane";

interface HomeProps {
  darkMode?: boolean;
}

function Home({ darkMode = false }: HomeProps) {
  return (
    <Viewpane darkMode={darkMode}>
      <h1>Home</h1>
      <p>
        Welcome to MyTime!
        <Icon name="coin" />
      </p>
    </Viewpane>
  );
}

export default Home;
