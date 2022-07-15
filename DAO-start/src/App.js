import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";

import yourDao from "./images/your_dao.png";
import {ConnectButton} from "web3uikit";

const App = () => {
  return (
    <>

      <div className="header">
        <img width="160px" src={yourDao} alt="dao logo" />
        <ConnectButton/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
};

export default App;
