import { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingState from "../Components/LoadingState";
const Dashboard = lazy(() => import("../Pages/Dashboard"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingState />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
