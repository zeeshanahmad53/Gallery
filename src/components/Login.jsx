import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import NavbarP from './Navbar'; // Ensure correct import
import Footer from './Footer';
import { databaseAuth } from './firebase'; // Ensure correct import
import { signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(databaseAuth, email, pass);
      navigate('/gallery');
    } catch (err) {
      setError('Failed to log in. Please check your email and password.');
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <NavbarP />
      </div>
      <Form className="p-5 col-md-4 col-sm-10 mx-auto bg-light m-3" onSubmit={handleSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label>
            <p>Email:</p>
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label sm={2}>
            <p className='pt-3'>Password:</p>
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="password"
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </Col>
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 12, offset: 2 }}>
            <Button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            <a
              className='text-primary ml-5 text-decoration-none'
              onClick={() => navigate('/signup')}
            >
              Create an account?
            </a>
          </Col>
        </Form.Group>
      </Form>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Login;
