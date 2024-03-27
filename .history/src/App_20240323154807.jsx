import "./App.css";
import omelette from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className="container flex flex-col md:p-4 md:bg-eggshell w-screen min-h-max">
      <div>
        <img src={omelette} alt="omelette" className="w-screen md:w-auto" />
      </div>
      <div className="bg-white m-8">
        <h1 className="text-left text-darkCharcoal text-4xl font-bold font-young">
          Simple Omelette Recipe
        </h1>
        <p className="text-left font-outfit text-nutmeg mt-4 font-semibold">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
      </div>
      <div className="bg-roseWhite p-4 mx-8 rounded-xl">
        <h1 className="text-left text-darkRaspberry text-2xl font-bold">
          Preparation Time
        </h1>
        <ul className="list-disc px-4 text-nutmeg">
          <li className=" font-semibold my-2">
            <span className="font-extrabold">Total:</span> Approximately 10
            minutes
          </li>
          <li className=" font-semibold my-2">
            <span className="font-extrabold">Preparation:</span> 5 minutes
          </li>
          <li className=" font-semibold my-2">
            <span className="font-extrabold">Cooking:</span> 5 minutes
          </li>
        </ul>
      </div>
      <div className="divide-y divide-lightGrey mx-4">
        <div className="m-4">
          <h1 className="text-left text-nutmegLight text-4xl font-bold font-young mt-8">
            Ingredients
          </h1>
          <ul className="list-disc px-4 font-outfit mt-2 mb-8 mx-4 text-nutmeg font-medium space-y-2">
            <li>2-3 large eggs</li>
            <li>Salt to taste</li>
            <li>Pepper to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional filling: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </div>
        <div className="m-4">
          <h1 className="text-left text-nutmegLight text-4xl font-bold font-young mt-8">
            Instructions
          </h1>
          <ol className="list-decimal px-4 font-outfit mt-2 mb-8 mx-4 text-nutmeg font-medium space-y-2">
            <li className="text-darkCharcoal">Pussy</li>
            <li className="text-darkCharcoal">Pussy</li>
            <li className="text-darkCharcoal">Pussy</li>
            <li className="text-darkCharcoal">Pussy</li>
            <li className="text-darkCharcoal">Pussy</li>
            <li className="text-darkCharcoal">Pussy</li>
            </ol>
        </div>
      </div>
    </div>
  );
}

export default App;
