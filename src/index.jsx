import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBackward, faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Events from "./pages/events";
import About from "./pages/about";
import MeetTeam from "./pages/team";
import OnDemand from "./pages/ondemand";
import HomePage from "./pages/home";
import ContactUs from "./pages/contactus";
import Header from "./components/header";
import Footer from "./components/footer";
import Waitlist from "./pages/waitlist";

library.add()

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        index: true,
        // path: "pages/home",
        element: <HomePage />,
      },
      {
        path: "pages/events",
        element: <Events />,
      },
      {
        path: "pages/about",
        element: <About />,
      },
      {
        path: "pages/team",
        element: <MeetTeam />,
      },
      {
        path: "pages/contactus",
        element: <ContactUs />,
      },
      {
        path: "pages/ondemand",
        element: <OnDemand />,
      },
      // {
      //   path: "pages/merch",
      //   element: <Waitlist />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Layout />
    </RouterProvider>
  </React.StrictMode>
);
