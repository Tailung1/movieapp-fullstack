import { createBrowserRouter } from "react-router-dom";
import SignIn from "../pages/signIn";
import SignUp from "../pages/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
    ],
  },
]);
export default router;
