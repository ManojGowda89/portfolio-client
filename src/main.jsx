
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./firebase/config.jsx";
import App from "./App.jsx"




ReactDOM.createRoot(document.getElementById("root")).render(

    <ContextProvider>
     <App/>
    </ContextProvider>
 
);
