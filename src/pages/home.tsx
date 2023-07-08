import { useState } from "react";
import Icon from "../components/Icon";
import Button from "../components/Button";
import Viewpane from "../components/Viewpane";

function Home() {
  const [num, setNum] = useState(0);
  const randomizeNum = () => setNum(Math.floor(Math.random() * 10));

  return (
    <Viewpane>
      <h1>Home</h1>
      <p>Welcome to MyTime!</p>
      <Button onClick={randomizeNum}>Randomize the number</Button>
      <Icon name={num + "-circle"} />
    </Viewpane>
  );
}

export default Home;
