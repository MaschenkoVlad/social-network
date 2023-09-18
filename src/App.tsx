import { RouterProvider, createBrowserRouter } from "react-router-dom"

import "./App.css"
import SignIn from "./features/Auth/components/SignIn"
import SignUp from "./features/Auth/components/SignUp"
import Explore from "./features/Explore"
import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/DashboardLayout"
import DashboardLayout from "./layouts/DashboardLayout"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // { index: true, element:  },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/explore",
            element: <Explore />,
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
])

const App: React.FC = (): JSX.Element => {
  return <RouterProvider router={router} />
}

export default App
