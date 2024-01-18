import React from "react";
import { Link } from "react-router-dom";

const DigitalMenusList = () => {
  const digitalMenus = [
    {
      language: "EN",
      digitalMenuId: 1,
    },
    {
      language: "BOS",
      digitalMenuId: 2,
    },
    {
      language: "DEU",
      digitalMenuId: 3,
    },
  ];
  return (
    <div className="max-w-md mx-auto my-[50%] flex justify-evenly items-center">
      {digitalMenus.map((digitalMenu) => (
        <div
          key={digitalMenu.digitalMenuId}
          className="p-2 mb-2 bg-white border border-gray-200 rounded-lg shadow"
        >
          <h1 className="font-bold uppercase mb-1">{digitalMenu.language} </h1>

          <Link>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DigitalMenusList;
