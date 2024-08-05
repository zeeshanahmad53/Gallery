import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Footer from './Footer';
import Navbar from './Navbar';
import { databaseAuth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

function Signup() {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [city, setCity] = useState("")
  const [zip, setZip] = useState("")
  const [isloaded, setIsLoaded] = useState(false)

  const naviagte = useNavigate();


  function naviagteTo(path){
    naviagte(path)
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      
      // event.stopPropagation();
    }

    setValidated(true);
  };


  const  displayVal = async () =>{
    setIsLoaded(true)
    if(name !=="" && email !=="" && pass!=="" && city!=="" && zip !==""){
     try{
      await createUserWithEmailAndPassword(databaseAuth,email,pass, name);
      alert("Account Created")
      naviagteTo('/login')

     }catch(err){
      alert(err.code)
     }
    // res ? console.log("enter data") : console.log("not enter");

    setEmail("");
    setPass("");
    setName("");
    setCity("");
    setZip("")
    }else{
      console.log("Please fill all feilds")
    }
    setIsLoaded(false)
  }

  return (
    <>
    <div>
      <Navbar/>
    </div>

    {/* <ContextualExample/> */}
    <Form method='GET' onSubmit={handleSubmit} className='col-10 mx-auto bg-light m-3 p-5'>
      <h1 className='pb-5 text-center'>Register Your Self</h1>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name" 
            value={name}
            onChange={(e) =>{setName(e.target.value)}}
          />
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="Email"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              value={email}
              onChange={(e) =>{setEmail(e.target.value)}}
            />
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>


        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={pass}
            onChange={(e) =>{setPass(e.target.value)}}
          />
        </Form.Group>
      </Row>


      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text"
          placeholder="City"
          required
          value={city}
            onChange={(e) =>{setCity(e.target.value)}}
            
            />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" 
          placeholder="Zip" 
          required
          value={zip}
            onChange={(e) =>{setZip(e.target.value)}}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>



      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" onClick={displayVal}>Submit form</Button>
      <p className='text-primary'>
      <a onClick={()=>naviagteTo('/login')}>Have an account?</a>
      </p>
    </Form>
      
         {/* {isloaded && <Loader />} */}
    
    <div>
      <Footer/>
    </div>


    </>
  );
}
export default Signup