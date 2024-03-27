/* eslint-disable react/prop-types */
import React from "react";
export function Image({
  omelette
}) {
  return <div>
        <img src={omelette} alt="omelette" className="w-screen md:w-auto" />
      </div>;
}
  