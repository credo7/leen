import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/pages/App";
import "./views/styles/global.styl";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Unit from "./views/pages/Unit";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/unit" element={<Unit />}>
          <Route path=":unitId" element={<Unit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
