import "./App.css";

function App() {
  return (
    <div className="container bg-eggshell p-4 h-[100vh]">
      <div className="flex flex-column justify-center bg-white w-full rounded-md h-max">
        <img
          src="./assets/react.svg"
          alt="omelette"
          className="w-full md:w-auto"
        />
        <h1 className="text-left text-wengeBrown text-xl font-bold font-young">Simple Omelette Recipe</h1>
      </div>
    </div>
  );
}

export default App;
