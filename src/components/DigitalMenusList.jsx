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
    <div className="max-w-lg mt-10 p-6 mx-auto flex justify-evenly items-center">
      {digitalMenus.map((digitalMenu) => (
        <div
          key={digitalMenu.digitalMenuId}
          className="p-4 sm:p-8 bg-white border border-gray-200 rounded-lg shadow"
        >
          <h1 className="text-xl font-bold uppercase mb-3 ">{digitalMenu.language} </h1>

          <Link to={`/digitalmenus/${digitalMenu.digitalMenuId}`}>
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
          </Link>
        </div>
      ))}
    </div>
    



  );
};

export default DigitalMenusList;
