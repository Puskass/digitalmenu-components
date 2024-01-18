import React from "react";
import  { Routes, Route } from 'react-router-dom'
import TablesList from "./components/TablesList";
import DigitalMenusList from "./components/DigitalMenusList";

const App = () => {
  return (
    <div className="mx-auto">
        <Routes>
          <Route path="/" element={<h1>Idi na ostale /digitalmenus /tableslist</h1>} />
          <Route path="/digitalmenus" element={<DigitalMenusList />} />
          <Route path="/tableslist" element={<TablesList />} />
        </Routes>
    </div>
  );
};

export default App;
