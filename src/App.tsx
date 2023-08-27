import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import { ListScreen, ViewScreen } from "./modules";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListScreen />} />
        <Route path="/view/:name" element={<ViewScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
