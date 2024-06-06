  import { useState } from "react";
import Layout from "../components/Layout";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { baseUrl } from "../server.jsx";


export default function Gmail() {


  window.location.href=" https://wa.me/9513849323"




}

//   const[tost,settost]=useState(false)
//   const [formData, setFormData] = useState({
//     fromAddress: "",
//     subject: "",
//     body: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

    
//     axios
//       .post(`${baseUrl}/mail`, {
//         fromAddress: formData.fromAddress,
//         subject: formData.subject,
//         body: formData.body,
//       })
//       .then((result) => {
//         if(result) {
         
//           settost(true) 
          
         

//         }
//       })
//       .catch((err) => console.log(err));

//     setFormData({
//       fromAddress: "",
//       subject: "",
//       body: "",
//     });

    
//   };

//   return (
//     <Layout title="Mail me!">

//     { tost && (
//    <div className="alert alert-warning alert-dismissible fade show" role="alert">
//   <strong>Mail Send!</strong> You have a response check your Mail Box  {"  "}
//   <button type="button" className="btn btn-primary" onClick={()=>settost(false)} data-dismiss="alert" aria-label="Close">
//     close
//   </button>
// </div>)
//     }

//       <div className="container text-white" style={{ height: "600px" }}>
//         <h2 className="mb-4">Send an Email</h2>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formFromAddress">
//             <Form.Label>Your Mail Id</Form.Label>
//             <Form.Control
//               type="email"
//               placeholder="Enter your email address"
//               name="fromAddress"
//               value={formData.fromAddress}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="formSubject">
//             <Form.Label>Subject</Form.Label>
//             <Form.Control
//               type="text"
//               placeholder="Enter subject"
//               name="subject"
//               value={formData.subject}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Form.Group controlId="formBody">
//             <Form.Label>Body</Form.Label>
//             <Form.Control
//               as="textarea"
//               rows={5}
//               placeholder="Enter email body"
//               name="body"
//               value={formData.body}
//               onChange={handleChange}
//               required
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Send Email
//           </Button>
//         </Form>
//       </div>
//     </Layout>
//   );
// }
