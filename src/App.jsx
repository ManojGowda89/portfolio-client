

import Projects from "./pages/Projects.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loadingreact from "./pages/Loadingreact.jsx";
import Admin from "./pages/Admin.jsx";
import Home from "./pages/Home.jsx";
import Gmail from "./pages/Gmail.jsx";
import { useMyContext } from "./firebase/config.jsx";

import Resumelink from "./pages/Resumelink.jsx";
import Linkedin from "./pages/Linkedin.jsx";

export default function App(){


    const {user} = useMyContext()

 



    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />,
          errorElement: <h1>Page Not Found</h1>,
        },
        {
          path: "/github",
          element: <Projects />,
        },
        {
          path: "/admin",
          element: user? <Admin/>: <Home/>,
        },
       
        {
          path: "/loadingtest",
          element: <Loadingreact />,
        },
        {
          path: "/whatsapp",
          element: <Gmail/>,
        },
        {
          path:"/resume",
          element:<Resumelink/>,
        },{
          path:"/linkedin",
          element:<Linkedin/>,
        }
      ]);


    return(
        <RouterProvider router={router} />
    )
}