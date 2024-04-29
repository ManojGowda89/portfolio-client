import { useEffect, useState } from "react";
import Layout from "../components/Layout.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { baseUrl } from "../server.jsx";
import axios from "axios";
import { useMyContext } from "../firebase/config.jsx";

export default function Projects() {
  const { toglemode } = useMyContext();

  const [projects, setProjects] = useState([
    {
      projectImage:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      projectName: "Project",
      projectDescription: "projectDescription",
      hostedLink: "hostedLink",
    },
    {
      projectImage:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      projectName: "Project",
      projectDescription: "projectDescription",
      hostedLink: "hostedLink",
    },
    {
      projectImage:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      projectName: "Project",
      projectDescription: "projectDescription",
      hostedLink: "hostedLink",
    },
    {
      projectImage:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      projectName: "Project",
      projectDescription: "projectDescription",
      hostedLink: "hostedLink",
    },
    {
      projectImage:
        "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&height=900&width=1600&fit=bounds",
      projectName: "Project",
      projectDescription: "projectDescription",
      hostedLink: "hostedLink",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${baseUrl}/getprojects`)
      .then((result) => {
        // Assuming result.data is an array of projects
        setProjects(result.data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  const styles = {
    width: "18rem",
    padding: "20px",
    marginLeft: "20px",
    marginBottom: "20px", // Add margin bottom to create space between rows
    backgroundColor: toglemode ? "#333" : "#fff",
  };

  return (
    <Layout title="Projects">
      <br />
      <br />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {projects.map((data, index) => (
          <div key={index} className="col">
            <Card style={styles}>
              <Card.Img variant="top" src={data.projectImage} />
              <Card.Body>
                <Card.Title style={{ color: toglemode ? "#fff" : "#333" }}>
                  {data.projectName}
                </Card.Title>

                <Card.Text style={{ color: toglemode ? "#fff" : "#333" }}>
                  {data.githubLink}
                </Card.Text>
              
                <Card.Text style={{ color: toglemode ? "#fff" : "#333" }}>
                  {data.projectDescription}
                </Card.Text>

                <Button href={data.hostedLink} variant="primary">
                  Go Live
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </Layout>
  );
}
