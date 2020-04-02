import React, { useReducer } from 'react'
import TextField from './TextField';
import ButtonComponent from './Button'
import LinkComponent from './LinkComponent'
import Label from './Label'
import { Button , Container, Row, Col} from 'reactstrap';
import * as yup from 'yup';


const initialState = {
  email: null,
  password: null
}

const setLoginData = param => {
    return {
    type: "SET VALUES",
    payload: param
    };
};
const reducer = (state, action) => {
    switch (action.type) {
      case "SET VALUES":
        return { ...state, ...action.payload };
      default:
        return state;
    }
}

const ContainerComponent = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleTextChange = e => {
      const { value, name } = e.target;
      let formData = { ...state };
      formData[name] = value;
      dispatch(setLoginData(formData));

  };

  const handleSubmit = e => {
      e.preventDefault();
      validatefields.isValid(state).then(isValid => {
          alert("Valid Input: " + isValid +
          "\nEntered Email: " + state.email +
           "\nEntered Password: " + state.password );
      });
      alert(state.email)
  };
  let validatefields = yup.object().shape({
      email: yup.string().email('Invalid Email ID').required("required field"),
      password: yup.string().required('required field'),
  });
  return (
   <center>
      <form onSubmit={handleSubmit}>
       <Container className='border'>
         <br/>
         Login
         <Row>
           <Col>
             <TextField type ='text' placeholder="Username" name = 'email' onChange={handleTextChange} value= {state.email} required/>
           </Col>
         </Row>
           <br/>
         <Row>
           <Col>
             <TextField type= 'password' placeholder = 'Password' name = 'password' onChange={handleTextChange} value= {state.password} />
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
