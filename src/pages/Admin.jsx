import { useState, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import Loadingreact from "./Loadingreact.jsx";
// import FileBase from "react-file-base64";

import Card from "react-bootstrap/Card";
import { useMyContext } from "../firebase/config.jsx";
import axios from "axios";
import { baseUrl } from "../server.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Layout from "../components/Layout.jsx";
import { Link } from "react-router-dom";

export default function Admin() {
  const { toglemode } = useMyContext();

  const {  SignOutfn, uploadimg, resimg } = useMyContext();


  const [load, setload] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectImage, setProjectImage] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [serverSide, setServerSide] = useState(false);
  const [serverGithubLink, setServerGithubLink] = useState(
    "Server Side Not written"
  );
  const [hostedLink, setHostedLink] = useState("");

  const[mails,setmails]=useState([])
  const [projects, setProjects] = useState([
    {
      projectImage:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      projectName: "Project",
      projectDescription: "projectDescription",
      hostedLink: "hostedLink",
    },
  ]);

  // const handleImageUpload = (base64) => {
  //   setProjectImage(base64);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setload(true);

    const genimg = await uploadimg(projectImage, projectImage.name);
    const projectData = {
      projectName,
      projectDescription,
      projectImage: genimg,
      githubLink,
      serverGithubLink,
      hostedLink,
    };

    console.log(projectData);
    axios
      .post(`${baseUrl}/create`, projectData)
      .then((result) => {
        if (result) {
          setload(false);
          
        }
      })

      .catch((error) => {
        if (error) {
          setload(false);
          console.log(error);
        }
      });
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/getprojects`,{
        headers: {
          firebase: `${localStorage.getItem("token")}`,
        },

      })
      .then((result) => {
        // Assuming result.data is an array of projects
        setProjects(result.data);
       
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });

      axios.get(`${baseUrl}/mymails`,{
        headers: {
          firebase: `${localStorage.getItem("token")}`,
        },

      }).then((result) =>setmails(result.data)).catch((error) =>console.log(error))
  }, []);
  const handleServerSideChange = (e) => {
    setServerSide(e.target.checked);
    if (!e.target.checked) {
      setServerGithubLink("Server Side Not written");
    }
  };

  if (load) {
    return <Loadingreact />;
  }

 
    return (
      <Layout title="Add Projects">
      
        <Container>
        <hr  style={{ color: toglemode ? "#333" : "#fff",height:"20px"}} />
        <Link to="https://docs.google.com/spreadsheets/d/1IAcdVSzMm4lACby0UTdJrieMSwpQjsRj4Qu1wHruLk8/edit?resourcekey#gid=1262485084" style={{ color: toglemode ? "#333" : "#fff" }}><h1>Mails</h1></Link>
        
         <div className="Mails">
         
         <div className="row row-cols-1 row-cols-md-2 g-4">
         {mails.map((data, index) => (
           <div key={index} className="col">

             <Card
               style={{
                 width: "35rem",
                 padding: "20px",
                 marginLeft: "20px",
                 marginBottom: "20px", // Add margin bottom to create space between rows
                 backgroundColor: toglemode ? "#333" : "#fff",
               }}
             >
              
               <Card.Body>
                 <Card.Title style={{ color: toglemode ? "#fff" : "#333" }}>
                   From :{data.fromAddress}
                 </Card.Title>
                 <Card.Text style={{ color: toglemode ? "#fff" : "#333" }}>
                 {data.subject}
               </Card.Text>
               <Card.Text style={{ color: toglemode ? "#fff" : "#333" }}>
               {data.body}
             </Card.Text>
               

                 <Button onClick={(e)=>{
                   e.preventDefault();
                   axios.delete(`${baseUrl}/maildelete/${data._id}`).then(window.location.reload()).catch((err)=>console.log(err))
                 }} variant="primary">
                   Delete
                 </Button>
               </Card.Body>
             </Card>
           </div>
         ))}
       </div>
         </div>

       
         
        <hr  style={{ color: toglemode ? "#333" : "#fff",height:"20px"}} />
          <h1 style={{ color: toglemode ? "#333" : "#fff" }}>Projects</h1>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {projects.map((data, index) => (
              <div key={index} className="col">
                <Card
                  style={{
                    width: "18rem",
                    padding: "20px",
                    marginLeft: "20px",
                    marginBottom: "20px", // Add margin bottom to create space between rows
                    backgroundColor: toglemode ? "#333" : "#fff",
                  }}
                >
                 
                  <Card.Body>
                    <Card.Title style={{ color: toglemode ? "#fff" : "#333" }}>
                      {data.projectName}
                    </Card.Title>

                    <Button onClick={(e)=>{
                      e.preventDefault();
                      axios.delete(`${baseUrl}/pdelete/${data._id}`).then(window.location.reload()).catch((err)=>console.log(err))
                    }} variant="primary">
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          <hr  style={{ color: toglemode ? "#333" : "#fff",height:"20px"}} />

          <h1 style={{ color: toglemode ? "#333" : "#fff" }}>
            Upload Project Details
          </h1>
          <Button onClick={SignOutfn}>LogOut</Button>
          <Form onSubmit={handleSubmit} >
            <Form.Group controlId="projectName">
              <Form.Label  style={{ color: toglemode ? "#333" : "#fff" }}>Project Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter project name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="projectDescription">
              <Form.Label  style={{ color: toglemode ? "#333" : "#fff" }}>Project Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter project description"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="projectImage">
              <Form.Label  style={{ color: toglemode ? "#333" : "#fff" }}>Project Image</Form.Label>
              <input
                type="file"
                onChange={(e) => setProjectImage(e.target.files[0])}
              />
            </Form.Group>

            <img
              src={resimg}
              alt="Project"
              style={{
                maxWidth: "100px",
                maxHeight: "100px",
                margin: "10px 0",
              }}
            />

            <Form.Group controlId="githubLink">
              <Form.Label  style={{ color: toglemode ? "#333" : "#fff" }}>Github Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Github link"
                value={githubLink}
                onChange={(e) => setGithubLink(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="serverSide">
              <Form.Check  style={{ color: toglemode ? "#333" : "#fff" }}
                type="checkbox"
                label="Has Server Side?"
                checked={serverSide}
                onChange={handleServerSideChange}
              />
            </Form.Group>

            {serverSide && (
              <Form.Group controlId="serverGithubLink">
                <Form.Label  style={{ color: toglemode ? "#333" : "#fff" }}>Server Github Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter server Github link"
                  value={serverGithubLink}
                  onChange={(e) => setServerGithubLink(e.target.value)}
                />
              </Form.Group>
            )}

            <Form.Group controlId="hostedLink">
              <Form.Label  style={{ color: toglemode ? "#333" : "#fff" }}>Hosted Link</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter hosted link"
                value={hostedLink}
                onChange={(e) => setHostedLink(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <hr  style={{ color: toglemode ? "#333" : "#fff",height:"20px"}} />
        </Container>
      </Layout>
    );
  } 

