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
    <div className="mt-10 sm:max-w-lg  mx-auto text-center flex justify-evenly items-center">
      {digitalMenus.map((digitalMenu) => (
        <div
          key={digitalMenu.digitalMenuId}
          className="p-4 sm:p-8 bg-white border border-gray-200 rounded-lg shadow"
        >
          <h1 className="text-xl font-bold uppercase mb-3 ">{digitalMenu.language} </h1>

          <Link to={`/digitalmenus/${digitalMenu.digitalMenuId}`}>
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="10.000000pt" height="16.000000pt" viewBox="0 0 1280.000000 640.000000"
 preserveAspectRatio="xMidYMid meet" >
<g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M9265 5920 c-247 -55 -416 -245 -440 -496 -14 -145 48 -315 152 -418
32 -31 414 -312 848 -624 435 -313 790 -572 790 -577 0 -6 -1876 -12 -5085
-15 -4225 -4 -5092 -7 -5125 -19 -139 -46 -266 -151 -328 -269 -35 -67 -77
-210 -77 -263 0 -46 39 -178 73 -249 56 -115 188 -227 322 -272 33 -11 898
-14 5114 -18 3607 -4 5075 -8 5078 -16 2 -6 -336 -288 -750 -627 -415 -339
-774 -638 -799 -665 -201 -215 -193 -549 20 -759 102 -101 229 -153 377 -153
97 0 178 20 260 63 63 34 2875 2328 2952 2408 58 61 108 159 132 258 26 103
26 116 1 216 -28 111 -70 192 -137 263 -42 44 -449 342 -1468 1073 -775 557
-1444 1036 -1486 1064 -41 29 -104 62 -140 74 -72 25 -219 36 -284 21z"/>
</g>
</svg>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default DigitalMenusList;
