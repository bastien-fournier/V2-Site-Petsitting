import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import SignUpForm from "./components/SignUpForm";
import LogInPage from "./pages/LoginPage";
import ProfilPage from "./pages/ProfilPage";
import AnimalPage from "./pages/AnimalPage";
import AboutServices from "./pages/AboutServices";
import BookingPage from "./pages/BookingPage";
import AdminPage from "./pages/AdminPage";
import AdminLoader from "./Loader/AdminLoader";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        id: "homePage",
        element: <HomePage />,
      },
      {
        path: "/sign-up-page",
        id: "signUpPage",
        element: <SignUpForm />,
      },
      {
        path: "/log-in-page",
        id: "logInPage",
        element: <LogInPage />,
      },
      {
        path: "/profil-page",
        id: "profilPage",
        element: <ProfilPage />,
      },
      {
        path: "/animal-page",
        id: "animalPage",
        element: <AnimalPage />,
      },
      {
        path: "/about-services",
        id: "aboutServices",
        element: <AboutServices />,
      },
      {
        path: "/booking-page",
        id: "bookingPage",
        element: <BookingPage />,
      },
      {
        path: "/admin-page",
        id: "adminPage",
        element: <AdminPage />,
        loader: AdminLoader,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
