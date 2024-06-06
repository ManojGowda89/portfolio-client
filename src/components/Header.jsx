import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useMyContext } from "../firebase/config.jsx";
// eslint-disable-next-line react/prop-types
function Header({ changetogle, toggle }) {
  const { googleSignin ,user,SignOutfn} = useMyContext();
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#333", boxShadow: "50px 50px 50px rgba(0, 0, 0, 0.2)" }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "#fff" }}>Manoj Gowda</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto"></Nav>
          <Nav>
     
       
            <Nav.Link as={Link} to="https://github.com/ManojGowda89?tab=repositories" style={{ color: "#fff" }}>Github</Nav.Link>
            <Nav.Link as={Link} to="https://www.linkedin.com/in/manojgowdabr89" style={{ color: "#fff" }}>Linkdin</Nav.Link>
            <Nav.Link as={Link} to="https://wa.me/9513849323" style={{ color: "#fff" }}>WhatsApp</Nav.Link>
            <Nav.Link as={Link} to="https://firebasestorage.googleapis.com/v0/b/projects-4f71b.appspot.com/o/manojgowda8951.pdf?alt=media&token=336d8791-29f6-4819-bdd8-52a090482696" style={{ color: "#fff" }}>Resume</Nav.Link>
           
         
            <Nav.Link onClick={changetogle} style={{ color: "#fff" }}><input type="checkbox" className="checkbox" id="checkbox" style={{ opacity: 0, position: "absolute" }} />
            <label htmlFor="checkbox" className="checkbox-label" style={{ backgroundColor: "#111", width: "50px", height: "26px", borderRadius: "50px", position: "relative", padding: "5px", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              
              <span className="ball" style={{ backgroundColor: "#fff", width: "22px", height: "22px", position: "absolute", left: toggle ?"25px" :"1px", top: "2px", borderRadius: "50%", transition: "transform 0.2s linear" }}></span>
            </label></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
