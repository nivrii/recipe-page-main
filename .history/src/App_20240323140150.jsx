import "./App.css";
import omelette from './assets/images/image-omelette.jpeg'

function App() {
  return (
    <div>
      <div className="flex flex-col bg-white w-full min-h-max">
        <img
          src={omelette}
          alt="omelette"
          className="w-screen md:w-auto"
        />
        <h1 className="text-center text-wengeBrown text-3xl font-bold font-young">
          Simple Omelette Recipe
        </h1>
      </div>
    </div>
  );
}

export default App;
