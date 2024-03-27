/* eslint-disable react/prop-types */
export function Image({
  omelette
}) {
  return <div className=" md:w-auto">
        <img src={omelette} alt="omelette" className="w-screen md:w-auto" />
      </div>;
}
  