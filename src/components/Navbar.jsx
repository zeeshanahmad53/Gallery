import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from './AuthContext';
import { signOut } from 'firebase/auth';
import { databaseAuth } from './firebase';

function NavbarP() {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();

  const handleNavigation = async (path) => {
    setLoader(true);
    navigate(path);
    setLoader(false);
  };

  const handleLogout = async () => {
    setLoader(true);
    try {
      await signOut(databaseAuth);
      navigate('/');
    } catch (error) {
      console.error('Failed to logout:', error);
    }
    setLoader(false);
  };

  const isIndexPage = location.pathname === '/';
  const isGalleryPage = location.pathname === '/gallery';
  const isUploadingPage = location.pathname === '/uploading';

  return (
    <>
      <Navbar expand="md" className="bg-body-tertiary px-md-5">
        <Container fluid>
          <Navbar.Brand href="#">Memories Album</Navbar.Brand>
          <div className='col-md-6 d-inline-flex pt-md-2'>
            <p className='p-3' style={{cursor:'pointer'}} onClick={() => handleNavigation('/')}>Home</p>
            <p className='p-3' style={{cursor:'pointer'}} onClick={() => handleNavigation('/gallery')}>Gallery</p>
            <p className='p-3' style={{cursor:'pointer'}} onClick={() => handleNavigation('/uploading')}>Upload</p>
            <p className='p-3' style={{cursor:'pointer'}} onClick={() => handleNavigation('/about')}>About</p>
          </div>
          {isIndexPage && !currentUser && (
            <div className='row col-md-2'>
              <div className='col-4 mx-sm-auto'>
                <Button variant="outline-primary" className='m-1' onClick={() => handleNavigation('/login')}>Login</Button>
              </div>
              <div className='col-4 mx-sm-auto pt-1'>
                <Button variant="outline-secondary" onClick={() => handleNavigation('/signup')}>Signup</Button>
              </div>
            </div>
          )}
          {(isGalleryPage || isUploadingPage || currentUser) && (
            <div className='row col-md-2'>
              <div className='col-4 mx-sm-auto'>
                <Button variant="outline-primary" className='m-1' onClick={handleLogout}>Logout</Button>
              </div>
            </div>
          )}
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavbarP;
