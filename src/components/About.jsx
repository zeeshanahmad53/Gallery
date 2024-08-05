import React from 'react';
import NavbarP from './Navbar';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import img from '../images/mission.jpg'

function About() {
   const navigateTo = useNavigate()
  
    return (

    <>
      <NavbarP />
      <div className="py-5 bg-light">
        <Row className='mx-0'>
          <Col md={{ span: 8, offset: 2 }}>
            <h1 className='text-center'>About Memories Album</h1>
            <p className="mt-4">
              Welcome to <strong>Memories Album</strong>, your go-to online gallery for storing and sharing your cherished images. Our platform is designed to provide a secure and user-friendly environment where you can easily upload, organize, and share your photos with friends, family, or the public.
            </p>
            <div className="row mt-5">
                <div className="left col-md-6">
                <h2>Our Mission</h2>
            <p>
              Our mission is to help you preserve your precious memories by offering a reliable and convenient platform to store your photos. Whether it's family gatherings, travel adventures, or everyday moments, Memories Album is here to ensure your memories are safe and easily accessible.
            </p>
                </div>

                <div className="right col-md-6 pt-2">
                    <img src={img} alt="Loading"  height={"250px"} width={"100%"}/>
                </div>
            </div>
            <h2>Features</h2>
            <ul>
              <li><strong>Secure Storage:</strong> Your photos are stored securely with our robust cloud infrastructure, ensuring they are safe from loss or damage.</li>
              <li><strong>Easy Upload:</strong> Effortlessly upload your photos from any device, and organize them into albums for easy access.</li>
              <li><strong>Share with Ease:</strong> Share your albums with friends and family via private links, or make them public for everyone to enjoy.</li>
              <li><strong>Access Anywhere:</strong> Access your photos from anywhere in the world, at any time, with our mobile-friendly platform.</li>
            </ul>
            <h2>How It Works</h2>
            <p>
              Getting started with Memories Album is simple and straightforward:
            </p>
            <ol>
              <li><strong>Sign Up:</strong> Create a free account to start using the platform.</li>
              <li><strong>Upload Photos:</strong> Use our easy-to-use upload feature to add your photos to your account.</li>
              <li><strong>Create Albums:</strong> Organize your photos into albums to keep your memories well-organized and easy to find.</li>
              <li><strong>Share:</strong> Share your albums with others or keep them private – the choice is yours!</li>
            </ol>
            <h2>Join Us Today</h2>
            <p>
              Join the Memories Album community today and start preserving your memories in a secure, convenient, and beautiful way. Whether you are an amateur photographer or just someone who loves capturing moments, Memories Album is the perfect place for you.
              create your account <strong> <a onClick={()=>{navigateTo('/signup')}}>NOW</a></strong>
            </p>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default About;
