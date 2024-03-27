import "./App.css";
import omelette from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className="container flex flex-col md:bg-white w-full min-h-max">
      <div>
        <img src={omelette} alt="omelette" className="w-screen md:w-auto" />
      </div>
      <div className="bg-white">
        <h1 className="text-center text-wengeBrown text-3xl font-bold font-young">
          Simple Omelette Recipe
        </h1>
      </div>
    </div>
  );
}

export default App;
