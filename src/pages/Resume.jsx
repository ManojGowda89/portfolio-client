import { Link } from "react-router-dom";
import { useMyContext } from "../firebase/config.jsx";
import "./Resume.css";  // Ensure this path is correct

function Resume() {
  const { toglemode } = useMyContext();

  return (
    <div
      className="resume"
      style={{
        color: toglemode ? "#333" : "#fff",
        height: "auto",
        border: "2px solid",
        padding: "20px",
        margin: "0 auto",
        maxWidth: "900px",
      }}
    >
      <h1>Manoj Gowda B R</h1>
      <p>
       <Link to="/gmail"  style={{ color: toglemode ? "#333" : "#fff" }} >manojgowda8951@gmail.com</Link> |<Link   style={{ color: toglemode ? "#333" : "#fff" } }>9513849323</Link> |{" "}
        <Link
          to="https://www.linkedin.com/in/manojgowdabr89"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: toglemode ? "#333" : "#fff" }}
        >
          LinkedIn/manojgowdabr89
        </Link>{" "}
        |{" "}
       
          <Link to="https://wa.me/9513849323"  style={{ color: toglemode ? "#333" : "#fff" }}>WhatsApp</Link>
       
      </p>
      <h2>EXPERIENCE</h2>
      <p>
        <strong>Full Stack Developer (MERN Stack)</strong>
        <br />
        <strong>CompSoft Technologies-Intern</strong> - August 2023 - November 2023, Bangalore
      </p>
      <ul className="no-bullets">
        <li>Utilized React.js to create reusable components, enhancing code maintainability and facilitating the development of dynamic user interfaces.</li>
        <li>Implemented authentication and authorization middleware in Node.js (Express.js) for secure user authentication and access control in web applications.</li>
      </ul>
      <p>
        <strong>Full Stack Developer-Intern</strong>
        <br />
        <strong>Delbo Digital Pvt Ltd (React.js, JavaScript)</strong> - April 2023 - July 2023, Bangalore
      </p>
      <ul className="no-bullets">
        <li>Managed component state effectively using React's useState hook for dynamic and interactive UI elements.</li>
        <li>Handled side effects, data fetching, and component lifecycle events using React's useEffect and useState hook.</li>
      </ul>
      <h2>PROJECTS</h2>
      <p>
        <strong>Car Dealership Website</strong>
        <br />
        Reactjs, Nodejs, Express, Mongoose, Context API
      </p>
      <ul className="no-bullets">
        <li>Developed a full-stack application using Node serving a REST API with React as the frontend.</li>
        <li>Custom Auth verification using sessions.</li>
        <li>Used Context API and MVC architecture for state management.</li>
        <li>Integrated payment gateway for online payments.</li>
      </ul>
      <p>
        <strong>Weather App</strong>
        <br />
        Open Weather API and React.js
      </p>
      <ul className="no-bullets">
        <li>Created a web application that displays all parameters of weather like humidity, wind speed, etc.</li>
      </ul>
      <p>
        <strong>URL Shortener</strong>
        <br />
        Node.js, Express, MongoDB, Pug.js
      </p>
      <ul className="no-bullets">
        <li>Built a full-stack URL shortener using Node.js, Express.js, MongoDB, and Pug.js, with custom URL aliasing and analytics.</li>
        <li>Deployed on a cloud platform, implementing performance optimizations and security measures for reliability.</li>
      </ul>
      <p>
        <strong>Online Doctor Appointment (Skylabs)</strong>
        <br />
        HTML, CSS, JavaScript, PHP
      </p>
      <ul className="no-bullets">
        <li>Developed a web application for booking doctors and medicines online.</li>
        <li>This web application uses payment gateways for accepting payments.</li>
      </ul>
      <h2>EDUCATION</h2>
      <p>
        <strong>Bachelor of Engineering</strong>
        <br />
        AMC Engineering College, Bangalore, 2024, 7.9 CGPA
      </p>
      <h2>INVOLVEMENT</h2>
      <p>
        <strong>mb64-connect</strong>
        <br />
        npm install mb64-connect
      </p>
      <ul className="no-bullets">
        <li>Developed and published mb64-connect, an npm package for seamless MongoDB connection.</li>
        <li>Enabled straightforward integration with <code>npm install mb64-connect</code> for easy database connectivity.</li>
      </ul>
      <h2>SKILLS</h2>
      <p>Programming Languages: HTML, CSS, JavaScript</p>
      <p>Frameworks: React.js, Node.js</p>
      <p>Libraries: Express.js, Mongoose</p>
      <p>Tools: GitHub, Firebase, Render, NPM</p>
    </div>
  );
}

export default Resume;
