import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import MainLayout from "../layouts/MainLayout";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import { getRoom } from "../api/rooms";
import DashboardLayout from "../layouts/DashboardLayout";
import AddRoom from "../pages/Dashboard/Host/AddRoom";
import MyListings from "../pages/Dashboard/Host/MyListings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
      index:true,
        element: <Home />,
      },
      {
        path: "room/:id",
        element: (
          <PrivateRoute>
            <RoomDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) => getRoom(params.id),
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "add-room",
        element:<AddRoom/>
      },
      {
        path: "my-listings",
        element:<MyListings/>
      },
    ],
  },
]);
