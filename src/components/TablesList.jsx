import React from "react";
import QRCodeGenerator from "./QRCodeGenerator";

const TablesList = () => {
  const links = [
    "https://example.com",
    "https://openai.com",
    "https://reactjs.org",
    "https://github.com",
  ];
  const deleteLink = (index) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };
  return (
    <div>
      <h1>TablesList</h1>
      {links.map((link, index) => (
        <div key={index}>
          <QRCodeGenerator link={link} />
        </div>
      ))}
    </div>
  );
};

export default TablesList;
