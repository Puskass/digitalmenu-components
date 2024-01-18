import React, { useState } from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ link }) => {
  const restaurantId = 123; // Replace with your actual restaurantId
  const [tables, setTables] = useState(["stol1", "stol2", "stol3", "stol4"]);

  const downloadQRCode = (number) => {
    const canvas = document.getElementById(`qrcode-${link}-${number}`);
    const url = canvas.toDataURL("image/png");
    const linkElement = document.createElement("a");
    linkElement.href = url;
    linkElement.download = `${number}-qrcode.png`;
    linkElement.click();
  };

  const deleteTable = (table) => {
    const updatedTables = tables.filter((t) => t !== table);
    setTables(updatedTables);
  };

  return (
    <div className="my-2 mx-auto max-w-fit text-center">
      {tables.map((table, i) => (
        <div
          key={i}
          className="p-4 mb-2 bg-white border border-gray-200 rounded-lg shadow"
        >
          <h1 className="font-bold uppercase mb-1">{table} </h1>

          <QRCode
            id={`qrcode-${link}-${table}`}
            value={`https://goeeze.com/restaurant/${restaurantId}/${table}`}
            size={128}
            className="mb-2"
          />
          <button
            className="mb-2 w-full font-medium text-blue-600 bg-white border border-gray-100 rounded-sm shadow"
            onClick={() => downloadQRCode(table)}
          >
            Download
          </button>
          <button
            className="mb-2 w-full font-medium text-red-600 bg-white border border-gray-100 rounded-sm shadow"
            onClick={() => deleteTable(table)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default QRCodeGenerator;
