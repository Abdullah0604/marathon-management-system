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
        path: "/marathons",
        hydrateFallbackElement: <Loading />,
        loader: () => fetch("http://localhost:3000/marathons?marathons=all"),
        element: (
          <PrivateRoute>
            <Marathons />
          </PrivateRoute>
        ),
      },
      {
        path: "/marathon-details/:marathonId",
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/marathon-details/${params.marathonId}`),
        element: (
          <PrivateRoute>
            <MarathonDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/registration-maration/:marathonId",
        hydrateFallbackElement: <Loading />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/marathon-details/${params.marathonId}`),
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
