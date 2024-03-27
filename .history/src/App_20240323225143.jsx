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
    <body className="bg-eggshell md:pt-20 md:pb-20 ">
      <div className=" 
       flex flex-col w-screen min-h-max md:m-auto md:p-10 md:w-[70vw] md:top-10
       md:bg-white md:rounded-3xl">
        <Image omelette={omelette} />
        <Header />
        <Prep />
        <div className="divide-y-2 divide-lightGrey mx-4 ">
          <Ingredients />
          <Instructions />
          <Nutrition />
        </div>
      </div>
    </body>
  );
}

export default App;
