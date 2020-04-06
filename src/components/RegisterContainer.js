import React, { useState, useReducer } from 'react'
import TextField from './TextField';
import ButtonComponent from './Button'
import LinkComponent from './LinkComponent'
import Label from './Label'
import LoginContainer from './LoginContainer.js'
import { Button , Container, Row, Col} from 'reactstrap';
import * as yup from 'yup';
// const [userName , setUserName] = useState("")
// const updateUser = () => {
//   setUsers([...users, userName])
//   setUserName("")
//   return (
//     console.log(users)
//   );
//   //console.log("u",userName);
// }
// console.log(userName);
// const handleInputChange = (e) => setUserName(e.target.value)
const RegisterContainer = (props) => {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);

  const validationSchema= yup.object({
  password: yup.string().required('Password is required'),
  cpassword: yup.string()
     .oneOf([yup.ref('password'), null])
     .required('Password confirm is required')
});

const handleSubmit = e => {
    e.preventDefault();
    const  user = {}
    let formData = new FormData(e.target);
    user.email = formData.get("email");
    user.password = formData.get("password");
    validationSchema.isValid(user).then(isValid =>{
        try {
      fetch("https://reqres.in/api/register", {
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
        setToken(jsonResponse.token);
        setId(jsonResponse.id)
        console.log(jsonResponse)
      })
    }
        catch(e){
      alert("Invalid email &/ password");
      console.log("error data",e)
      console.error(e)
    }
    })
    }
const logOut = () =>{
  return(
  <LoginContainer/>
)
}
const updateUser = () =>{}
if(token){
  return(
  <form onSubmit={logOut}>
    <center>
      <h3>Registration Successful</h3>
      <ul>
        <li>Id = {id}</li>
        <li>Token = {token}</li>
      </ul>
      <Button type="submit" color = 'primary '>Logout</Button>
      <br/><br/>
      <input type = "button" value = "Update" onclick={updateUser}/>
    </center>
  </form>
)}
  return (
   <center>
      <form onSubmit={handleSubmit}>
       <Container className='border'>
         <br/>
         Register
         <br/>
             <TextField type ='text' placeholder="Email" name = 'email' />
             <br/><br/>
             <TextField type= 'password' placeholder = 'Password' name = 'password'  />
             <br/><br/>
             <TextField type= 'password' placeholder = 'Confirm Password' name = 'cpassword'  />
             <br/><br/>
              <Button type="submit" color = 'primary '>Submit</Button>
              <br/><br/>
             <LinkComponent value='Already have account ?? Login' href={()=>LoginContainer}/>
             <br/>

       </Container>
      </form>
   </center>
 );
}
 // <td><a onClick={() => EditCab(l.id)} >Edit</a></td>

export default RegisterContainer;
