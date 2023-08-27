import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLoader } from "@components/AppLoader/AppLoader";
import { CandidateApplicationForm } from "@pages/CandidateApplicationForm/CandidateApplicationForm";
import { Home } from "@pages/Home/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Suspense fallback={<AppLoader />}> */}
        <Route
          path="/candidate-application-form"
          element={<CandidateApplicationForm />}
        />
        {/* </Suspense> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
