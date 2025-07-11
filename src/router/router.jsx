import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Marathons from "../pages/Marathons/Marathons";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "../private-route/PrivateRoute";
import Loading from "../components/Loader/Loading";
import MarathonDetails from "../pages/MarathonDetails/MarathonDetails";
import RegistrationMaration from "../pages/RegistrationMaration/RegistrationMarathon";
import AddMarathon from "../pages/Dashboard/AddMarathon/AddMarathon";
import MyMarathons from "../pages/Dashboard/MyMarathonList/MyMarathons";
import MyApply from "../pages/Dashboard/MyApplyList/MyApply";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/marathons",
        element: (
          <PrivateRoute>
            <Marathons />
          </PrivateRoute>
        ),
      },
      {
        path: "/marathon-details/:marathonId",

        element: (
          <PrivateRoute>
            <MarathonDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/registration-maration/:marathonId",
        element: (
          <PrivateRoute>
            <RegistrationMaration />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />{" "}
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: (
              <PrivateRoute>
                <AddMarathon />{" "}
              </PrivateRoute>
            ),
          },
          {
            path: "add-marathon",
            element: (
              <PrivateRoute>
                <AddMarathon />{" "}
              </PrivateRoute>
            ),
          },
          {
            path: "my-marathon-list",
            element: (
              <PrivateRoute>
                <MyMarathons />{" "}
              </PrivateRoute>
            ),
          },
          {
            path: "my-apply-list",
            element: (
              <PrivateRoute>
                <MyApply />{" "}
              </PrivateRoute>
            ),
          },
        ],
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/*",
        Component: NotFound,
      },
    ],
  },
]);

export default router;
