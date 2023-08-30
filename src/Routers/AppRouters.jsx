import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Hoc/Layout/Layout";
import { routes } from "./routes";
import { Fragment } from "react";

const AppRoutes = () => {
  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? "/" : "/candidate-application-form/"}
    >
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              route.wrapperWithLayout ? (
                <Layout>{route.component}</Layout>
              ) : (
                <Fragment>{route.component}</Fragment>
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
