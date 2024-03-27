import "./App.css";
import { Nutrition } from "./Nutrition";
import { Instructions } from "./Instructions";
import { Ingredients } from "./Ingredients";
import { Prep } from "./Prep";
import { Header } from "./Header";
import { Image } from "./Image";
import omelette from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className="container flex flex-col md:w-[60vw] md:p-4 md:bg-white w-screen min-h-max">
      <Image omelette={omelette} />
      <Header />
      <Prep />
      <div className="divide-y-2 divide-lightGrey mx-4 ">
        <Ingredients />
        <Instructions />
        <Nutrition />
      </div>
    </div>
  );
}

export default App;
