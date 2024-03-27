import "./App.css";

function App() {
  return (
    <div className="md:container bg-eggshell p-0 md:p-4 h-[100vh]">
      <div className="flex flex-col  bg-white min-w-full rounded-md min-h-max">
        <img
          src="./assets/react.svg"
          alt="omelette"
          className="w-full md:w-auto"
        />
        <h1 className="text-center text-wengeBrown text-xl font-bold font-young">
          Simple Omelette Recipe
        </h1>
      </div>
    </div>
  );
}

export default App;
