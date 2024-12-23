import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SingUpPage";
import LogInPage from "./pages/LoginPage";
import ProfilPage from "./pages/ProfilPage";
import AnimalPage from "./pages/AnimalPage";
import AboutServices from "./pages/AboutServices";
import BookingPage from "./pages/BookingPage";
import AdminPage from "./pages/AdminPage";
import AdminLoader from "./Loader/AdminLoader";
import About from "./pages/About";

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
        element: <SignUpPage />,
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
      {
        path: "/about",
        id: "about",
        element: <About />,
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
