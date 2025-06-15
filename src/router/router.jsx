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
import MyMarathonList from "../pages/Dashboard/MyMarathonList/MyMarathonList";
import MyApplyList from "../pages/Dashboard/MyApplyList/MyApplyList";

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
        Component: Marathons,
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
        Component: Dashboard,
        children: [
          {
            index: true,
            Component: AddMarathon,
          },
          {
            path: "add-marathon",
            Component: AddMarathon,
          },
          {
            path: "my-marathon-list",
            Component: MyMarathonList,
          },
          {
            path: "my-apply-list",
            Component: MyApplyList,
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
    ],
  },
]);

export default router;
