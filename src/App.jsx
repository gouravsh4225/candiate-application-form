import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./Routers/AppRouters";

const App = () => {
  return (
    <Fragment>
      <AppRoutes />
    </Fragment>
  );
};

export default App;
