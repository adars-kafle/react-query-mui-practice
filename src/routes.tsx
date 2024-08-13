import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage, SignupPage, ErrorPage, AppLayout } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

import {
  AllTasks,
  PendingTasks,
  InProgressTasks,
  CompletedTasks,
} from "./components/TaskComponents";

import EditProfile from "./components/EditProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <ProtectedRoute>
          <AppLayout />
        </ProtectedRoute>
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <AllTasks /> },
      { path: "pending", element: <PendingTasks /> },
      { path: "in-progress", element: <InProgressTasks /> },
      { path: "completed", element: <CompletedTasks /> },
      { path: "profile", element: <EditProfile /> },
    ],
  },
  {
    path: "/login",
    element: (
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: (
      <AuthProvider>
        <SignupPage />
      </AuthProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

const MainRoutes = () => {
  return <RouterProvider router={router} />;
};

export default MainRoutes;
