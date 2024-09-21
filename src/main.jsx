import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Work from "./pages/Work/Work";
import Personal from "./pages/Personal/Personal";
import Retouch from "./pages/Retouch/Retouch";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import App from "./App";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Work></Work>,
      },
      {
        path: "/personal",
        element: <Personal></Personal>,
      },
      {
        path: "/retouche",
        element: <Retouch></Retouch>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
