import { useMyContext } from "../firebase/config.jsx";

import { Link } from "react-router-dom";

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
        margin: "0 auto", // Center the content horizontally
        maxWidth: "900px", // Set maximum width for better readability
      }}
    >
      <h1>Manoj Gowda B R</h1>
      <p>
        9513849323 |{" "}
        <Link
          href="https://www.linkedin.com/in/Manojgowda"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: toglemode ? "#333" : "#fff" }}
        >
          linkedin@Manojgowda
        </Link>{" "}
        |{" "}
        <Link
          href="https://github.com/Manojgowda"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: toglemode ? "#333" : "#fff" }}
        >
          Github@Manojgowda
        </Link>{" "}
        |{" "}
        <Link
          href="https://wa.me/9513849323"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: toglemode ? "#333" : "#fff" }}
        >
          Whatsapp@Manojgowda
        </Link>
      </p>
      <h2>EDUCATION</h2>
      <p>AMC Engineering College, Bangalore, India</p>
      <p>
        Bachelor of Engineering, Computer Science And Engineering, 2020 – 2024
      </p>
      <p>SSPU College of Science, Tumkur, India</p>
      <p>PU, PCMB, 2018 - 2020</p>
      <h2>EXPERIENCE</h2>
      <p>
        <strong>Delbo Digital Pvt Ltd</strong> - Jun. 2022 – Sep.2023
      </p>
      <p>Software Developer — (Reactjs, Nodejs(Express.js), MongoDB)</p>

      <h6>
        APIs and third-party libraries to enhance application functionality and
        performance
      </h6>
      <h6>
        Designed and implemented MongoDB database schemas, proficient in CRUD
        operations and data modeling using Mongoose ODM in Node.js applications.
      </h6>

      <p>
        <strong>CompSoft Technologies</strong> - Nov. 2023 – Dec.2023
      </p>
      <p>Software Developer — (Reactjs, Nodejs(Express.js), MongoDB, MySQL)</p>

      <h6>
        Utilized React.js to create reusable components, enhancing code
        maintainability and facilitating the development of dynamic user
        interfaces.
      </h6>
      <h6>
        Implemented authentication and authorization middleware in Node.js
        (Express.js) for secure user authentication and access control in web
        applications.
      </h6>

      <h2>PROJECTS</h2>
      <p>
        <strong>Car DealerShip Website</strong> - March 2023 – NOV 2023
      </p>

      <h6>
        Developed Link full-stack application using with Node serving Link REST
        API with React as the frontend.
      </h6>
      <h6>Custom Auth verification using sessions</h6>
      <h6>Used Context Api and MVC architecture For state Management.</h6>
      <h6>Integrated payment gateway for online payments.</h6>

      <p>
        <strong>UPI QR Gen and Scan</strong> - May 2021 – Sep 2021
      </p>

      <h6>
        Developed Link Web application for generating QR code for upi Payments
      </h6>

      <p>
        <strong>Weather App</strong> - Jan 2023 – March 2023
      </p>

      <h6>
        Created an web application which displays all parameters of Weather like
        Humidity,Wind Speed ,etc.
      </h6>

      <p>
        <strong>Online Doctor Appointment (Skylabs)</strong> - May 2022 – Sep
        2022
      </p>

      <h6>
        Developed Link web application for booking doctors and medicines online.
      </h6>
      <h6>
        This web application uses payment gateways for accepting payments.
      </h6>

      <h2>TECHNICAL SKILLS</h2>
      <p>Languages: JavaScript, NoSql, Sql, CSS, HTML, Java, PHP;</p>
      <p>Frameworks: Reactjs, Nodejs, Expressjs, MongoDB, Bootstrap</p>
      <p>Developer Tools: Git, AWS, Firebase</p>
    </div>
  );
}

export default Resume;
