import React from 'react'
import './footer.css';
import NavbarP from './Navbar';

function Footer() {
  return (
    <>
    <div>
    </div>
     <footer className="footer text-dark p-4 text-center">
            <div className="container pt-5">
                <div className="footer-row">
                    <div className="footer-column">
                        <h5>Product</h5>
                        <p>MyAlbum Premium</p>
                        <p>Photo Books</p>
                    </div>
                    <div className="footer-column">
                        <h5>For Proffessional</h5>
                       <p>MyAlbum Pro</p>
                       <p>Team up</p>
                       <p>Photo Contests</p>
                    </div>
                    <div className="footer-column">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-row">
                    <div className="footer-column full-width mt-3">
                        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer