import Home from "../components/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddVolunteer from "../components/AddVolunteer/AddVolunteer";
import PrivateRoute from "./PrivateRoute";
import VolunteerDetails from "../components/VolunteerDetails/VolunteerDetails";
import ApplyVolunteer from "../components/ApplyVolunteer/ApplyVolunteer";
import VolunteerNeeded from "../components/VolunteerNeeded/VolunteerNeeded";
import ManagePost from "../components/ManagePost/ManagePost";
import UpdatePost from "../components/UpdatePost/UpdatePost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add-volunteer-post",
        element: (
          <PrivateRoute>
            <AddVolunteer></AddVolunteer>
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteer/:id",
        element: (
          <PrivateRoute>
            <VolunteerDetails></VolunteerDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteer/${params.id}`),
      },
      {
        path: "/apply-volunteer/:id",
        element: (
          <PrivateRoute>
            <ApplyVolunteer></ApplyVolunteer>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteer/${params.id}`),
      },
      {
        path: "/need-volunteer",
        element: <VolunteerNeeded></VolunteerNeeded>,
      },
      {
        path: "/manage-my-post",
        element: (
          <PrivateRoute>
            <ManagePost></ManagePost>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/volunteers/${params.email}`),
      },
      {
        path: "/update-post/:id",
        element: (
          <PrivateRoute>
            <UpdatePost></UpdatePost>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/volunteer/${params.id}`),
      },
    ],
  },
]);

export default router;
