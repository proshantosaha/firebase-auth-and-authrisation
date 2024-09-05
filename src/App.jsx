import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./page/Login";
import Home from "./page/home";
import Ragister from "./page/Ragister";
import Reset from "./page/Reset";
import { PrivateRoutes } from "./routes/PrivateRoutes";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Home />} />

            <Route path="/" element={<Home />} exact />
          </Route>
          <Route path="/login" element={<Login />} />

          <Route path="/ragister" element={<Ragister />} />

          <Route path="/reset" element={<Reset />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
