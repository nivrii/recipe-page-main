import "./App.css";
import omelette from "./assets/images/image-omelette.jpeg";

function App() {
  return (
    <div className="container flex flex-col md:p-4 md:bg-eggshell w-screen min-h-max">
      <div>
        <img src={omelette} alt="omelette" className="w-screen md:w-auto" />
      </div>
      <div className="bg-white p-8">
        <h1 className="text-left text-wengeBrown text-4xl font-bold font-young">
          Simple Omelette Recipe
        </h1>
      </div>
    </div>
  );
}

export default App;
