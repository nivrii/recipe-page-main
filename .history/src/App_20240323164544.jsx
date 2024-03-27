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
          <ul className="font-outfit mt-2 mb-8 mx-4 text-nutmeg font-medium space-y-2">
            <li className="flex flex-row space-x-2">
              <div className="text-nutmegLight font-bold">1.</div>
              <div className="">
                <span className="font-bold"> Beat the eggs:</span> In a bowl,
                beat the eggs with a pinch of salt and pepper until they are
                well mixed. You can add a tablespoon of water and milk for a
                fluffier texture.
              </div>
            </li>
            <li className="flex flex-row space-x-2">
              <div className="text-nutmegLight font-bold ">2.</div>
              <div className="">
                <span className="font-bold"> Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or oil.
              </div>
            </li>
            <li className="flex flex-row space-x-2">
              <div className="text-nutmegLight font-bold">3.</div>
              <div className="">
                <span className="font-bold"> Cook the omelette:</span> Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </div>
            </li>
            <li className="flex flex-row space-x-2">
              <div className="text-nutmegLight font-bold">4.</div>
              <div className="">
                <span className="font-bold"> Add fillings(optional):</span> When
                the eggs begin to set at the edges but are still slightly runny
                in the middle, sprinkle your chosen fillings over one half of
                the omelette.
              </div>
            </li>
            <li className="flex flex-row space-x-2">
              <div className="text-nutmegLight font-bold">5.</div>
              <div className="">
                <span className="font-bold"> Fold and serve:</span> As the
                omelette continues to cook, carefully lift one edge and fold it
                over the fillings. Let it cook for another minute, then slide it
                onto a plate.
              </div>
            </li>
            <li className="flex flex-row space-x-2">
              <div className="text-nutmegLight font-bold">6.</div>
              <div className="">
                <span className="font-bold"> Enjoy:</span> Serve hot, with
                additional salt and pepper if needed.
              </div>
            </li>
          </ul>
        </div>
        <div className="m-4">
        <h1 className="text-left text-nutmegLight text-4xl font-bold font-young mt-8">
            Nutrition
          </h1>
          <p className="text-nutmeg font-semibold">The table below shows nutritional values per serving without the additional fillings.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
