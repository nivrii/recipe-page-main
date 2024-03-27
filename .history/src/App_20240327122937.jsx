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
    <body className="md:bg-eggshell md:pt-20 md:pb-20 ">
      <div className=" 
       flex flex-col w-screen min-h-max md:m-auto md:p-8 md:w-[70vw] 
       md:bg-white md:rounded-3xl lg:w-[60vw]">
        <Image omelette={omelette} />
        <Header />
        <Prep />
        <div className="divide-y-2 divide-lightGrey mx-4 md:mx-0">
          <Ingredients />
          <Instructions />
          <Nutrition />
        </div>
      </div>
    </body>
  );
}

export default App;
