
import { useMyContext } from "../firebase/config.jsx";
import Layout from "../components/Layout";
import Resume from "./Resume";
import { useEffect } from "react";
import { baseUrl } from "../server.jsx";
import axios from "axios"

function Home() {
  const { toglemode } = useMyContext();

 useEffect(()=>{
axios.get(`${baseUrl}`).then((response)=>console.log(response.data)).catch((error)=>console.log(error))
 },[1])
 

  return (
    <Layout title="Home">
      <div style={{ textAlign: "center" ,height: "auto"}}>
        <h1 style={{ color: toglemode ? "#333" : "#fff" }}>Welcome to My Portfolio</h1>
        <p style={{ color: toglemode ? "#333" : "#fff" }}>Heres a glimpse of my resume:</p>
        {/* Render the resume component */}
        <Resume />
      
      </div>
    </Layout>
  );
}

export default Home;
