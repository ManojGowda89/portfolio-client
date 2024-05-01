import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 ">
      <div className="container d-flex justify-content-around align-items-center">
        <div>
          <Link to="https://www.linkedin.com/in/Manojgowda" className="text-white mr-5">LinkedIn</Link> | { " "}
          <Link to="https://github.com/Manojgowda" className="text-white mr-5">GitHub</Link>  | { " "}
          <Link to="https://wa.me/9513849323" className="text-white mr-3">WhatsApp</Link> | { " "}
          
          <Link to="/gmail" className="text-white">Gmail</Link> 
        </div>
      </div>
    </footer>
  );
}
