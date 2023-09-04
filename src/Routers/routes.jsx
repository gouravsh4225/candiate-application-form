import { Home } from "../Pages/Home/Home";
import { CandidateApplicationForm } from "../Pages/CandidateApplicationForm/CandidateApplicationForm";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    component: <Navigate to="/form" replace />,
    redirectTo: "/form",
    wrapperWithLayout: true,
  },
  {
    path: "/form",
    component: <CandidateApplicationForm />,
    wrapperWithLayout: true,
  },
];

export { routes };
