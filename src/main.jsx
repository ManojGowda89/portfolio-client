
import ReactDOM from "react-dom/client";
import Projects from "./pages/Projects.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ContextProvider } from "./firebase/config.jsx";
import Loadingreact from "./pages/Loadingreact.jsx";
import Admin from "./pages/Admin.jsx";
import Home from "./pages/Home.jsx";
import Gmail from "./pages/Gmail.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Page Not Found</h1>,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
 
  {
    path: "/loadingtest",
    element: <Loadingreact />,
  },
  {
    path: "/gmail",
    element: <Gmail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
 
);
