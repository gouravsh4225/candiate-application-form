import { Home } from "../Pages/Home/Home";
import { CandidateApplicationForm } from "../Pages/CandidateApplicationForm/CandidateApplicationForm";
const routes = [
  {
    path: "/",
    component: <Home />,
    redirectTo: "/form",
    wrapperWithLayout: true,
  },
  {
    path: "/form",
    component: <CandidateApplicationForm />,
    wrapperWithLayout: true,
  },
];

console.log(routes);

export { routes };
