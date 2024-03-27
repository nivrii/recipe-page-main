export function Nutrition() {
  return (
    <div className="m-4 mb-8 md:mx-0">
      <h1 className="text-left text-nutmegLight text-4xl font-bold font-young mt-8 mb-4">
        Nutrition
      </h1>
      <p className="text-nutmeg font-semibold font-outfit mb-4">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="divide-y divide-lightGrey font-outfit">
        <div className="flex flex-row my-2 text-center">
          <p className="basis-1/2 text-nutmeg font-semibold ">Calories</p>
          <p className="basis-1/2 text-nutmegLight font-bold">277kcal</p>
        </div>
        <div className="flex flex-row my-2 text-center">
          <p className="basis-1/2 text-nutmeg font-semibold">Carbs</p>
          <p className="basis-1/2 text-nutmegLight font-bold">0g</p>
        </div>
        <div className="flex flex-row my-2 text-center">
          <p className="basis-1/2 text-nutmeg font-semibold">Protein</p>
          <p className="basis-1/2 text-nutmegLight font-bold">20g</p>
        </div>
        <div className="flex flex-row my-2 text-center">
          <p className="basis-1/2 text-nutmeg font-semibold">Fat</p>
          <p className="basis-1/2 text-nutmegLight font-bold">22g</p>
        </div>
      </div>
    </div>
  );
}
