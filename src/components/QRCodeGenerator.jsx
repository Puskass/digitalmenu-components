import React from "react";
import QRCode from "qrcode.react";

const QRCodeGenerator = ({ url, table, tableNumbers, onDownload, onDelete }) => {
  const downloadQRCode = () => {
    onDownload && onDownload(url);
  };

  const deleteTable = () => {
    onDelete && onDelete(table);
  };

  return (
    <div className="mx-auto max-w-fit p-4 mt-2 text-center bg-white border border-gray-200 rounded-lg shadow">
      {tableNumbers.map((number, i) => (
        <React.Fragment key={i}>
          <h1>{number}</h1>
          <QRCode id={`qrcode-${table}`} value={url} size={128} />
          <button className="font-medium pt-2 text-blue-600" onClick={downloadQRCode}>
            Download
          </button>
          <button className="w-full font-medium text-red-600" onClick={deleteTable}>
            Delete
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export default QRCodeGenerator;
