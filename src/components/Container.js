import React, { useReducer } from 'react'
import TextField from './TextField';
import ButtonComponent from './Button'
import LinkComponent from './LinkComponent'
import Label from './Label'
import { Button , Container, Row, Col} from 'reactstrap';
import * as yup from 'yup';

const ContainerComponent = (props) => {

  const handleSubmit = e => {
      e.preventDefault();

      let formData = new FormData(e.target);
      try {
        fetch("https://reqres.in/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: formData.get("email"),
            password: formData.get("password")
          })
        })
        .then(response => {
          return response.json();
        })
        .then(jsonResponse =>{
          if(jsonResponse.token)
            console.log("Token No",jsonResponse.token);
          else {
            console.log("error found")
          }
        })
      }
      catch(e){
        alert("Invalid email &/ password");
        console.log("error data",e)
        console.error(e)
      }
    }
  return (
   <center>
      <form onSubmit={handleSubmit}>
       <Container className='border'>
         <br/>
         Login
         <Row>
           <Col>
             <TextField type ='text' placeholder="Username" name = 'email' required/>
           </Col>
         </Row>
           <br/>
         <Row>
           <Col>
             <TextField type= 'password' placeholder = 'Password' name = 'password'  />
           </Col>
         </Row>
         <Row>
           <Col>
             <br/>
             <Button type="submit" color = 'primary '>Submit</Button>
             </Col>
           </Row>
             <LinkComponent value='Dont have account ?? Signup' href='#'/>
       </Container>
      </form>
   </center>
 );
}
export default ContainerComponent;
