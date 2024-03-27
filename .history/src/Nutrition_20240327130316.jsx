export function Nutrition() {
  return (
    <div className="m-4 mb-8 md:mx-0">
      <h1 className="text-left text-nutmegLight text-3xl md:text-4xl font-bold font-young mt-8 mb-4">
        Nutrition
      </h1>
      <p className="text-nutmeg font-semibold font-outfit md:text-xl">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="divide-y divide-lightGrey font-outfit md:text-xl">
        <div className="flex flex-row my-2 text-left">
          <p className="basis-1/2 text-nutmeg font-semibold ml-8 md:ml-28">Calories</p>
          <p className="basis-1/2 text-nutmegLight font-bold">277kcal</p>
        </div>
        <div className="flex flex-row my-2 text-left mt-4">
          <p className="basis-1/2 text-nutmeg font-semibold ml-8 md:ml-28">Carbs</p>
          <p className="basis-1/2 text-nutmegLight font-bold">0g</p>
        </div>
        <div className="flex flex-row my-2 text-left">
          <p className="basis-1/2 text-nutmeg font-semibold ml-8 md:ml-28">Protein</p>
          <p className="basis-1/2 text-nutmegLight font-bold">20g</p>
        </div>
        <div className="flex flex-row my-2 text-left">
          <p className="basis-1/2 text-nutmeg font-semibold ml-8 md:ml-28">Fat</p>
          <p className="basis-1/2 text-nutmegLight font-bold">22g</p>
        </div>
      </div>
    </div>
  );
}
