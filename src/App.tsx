import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import { Provider } from "react-redux";
import store from "./Kanbas/store";
function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="h-100">
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;
