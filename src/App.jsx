import React, { Fragment } from "react";
import "./App.css";
import AppRoutes from "./Routers/AppRouters";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(routes, {
    basename: import.meta.env.DEV ? "/" : "/candidate-application-form/",
  });

  return (
    <Fragment>
      <AppRoutes />
    </Fragment>
  );
};

export default App;
