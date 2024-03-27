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
        <ul className="list-disc px-4">
          <li className="text-nutmeg font-semibold my-2">
            <span className="font-extrabold">Total:</span> Approximately 10
            minutes
          </li>
          <li className="text-nutmeg font-semibold my-2">
            <span className="font-extrabold">Preparation:</span> 5 minutes
          </li>
          <li className="text-nutmeg font-semibold my-2">
            <span className="font-extrabold">Cooking:</span> 5 minutes
          </li>
        </ul>
      </div>
      <div className="m-8">
        <h1 className="text-left text-darkRaspberry text-4xl font-bold font-young">Ingredients</h1>
      </div>
    </div>
  );
}

export default App;
