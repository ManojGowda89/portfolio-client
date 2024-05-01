// <div className="container">
//         <h2 style={{color: 'white'}}>My Resume</h2>
//         <div style={{ width: "100%", height: "600px" }}>
//           <embed src="https://firebasestorage.googleapis.com/v0/b/projects-4f71b.appspot.com/o/Manoj%20Gowda%20(2).pdf?alt=media&token=17301b47-e19d-437a-a67e-a8f1e9bb86f4" alt="/Manojresume.pdf" type="application/pdf" width="100%" height="100%" />
//         </div>
//       </div>




//       import ReactDOM from "react-dom/client";
// import Projects from "./pages/Projects.jsx";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { ContextProvider, useMyContext } from "./firebase/config.jsx";
// import Loadingreact from "./pages/Loadingreact.jsx";
// import Admin from "./pages/Admin.jsx";
// import Home from "./pages/Home.jsx";
// import Gmail from "./pages/Gmail.jsx";

// const App = () => {
//   const { user } = useMyContext();
//   console.log(user);

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Home />,
//       errorElement: <h1>Page Not Found</h1>,
//     },
//     {
//       path: "/projects",
//       element: <Projects />,
//     },
//     {
//       path: "/admin",
//       element: <Admin />,
//     },
//     {
//       path: "/loadingtest",
//       element: <Loadingreact />,
//     },
//     {
//       path: "/gmail",
//       element: <Gmail />,
//     },
//   ]);

//   return (
//     <ContextProvider>
//       <RouterProvider router={router} />
//     </ContextProvider>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
