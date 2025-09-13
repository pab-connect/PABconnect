import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Auth from "../pages/auth";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  }
])