import React from 'react';
import img1 from '../images/under1.webp';
import img2 from '../images/under2.webp';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Import the AuthContext to check if the user is logged in

function UnderCarousel() {
    const navigate = useNavigate();
    const { currentUser } = useAuth(); // Get the current user from the AuthContext

    const toNavigate = (path) => {
        navigate(path);
    };

    return (
        <>
            <div className="col-md- mx-auto main-container text-center pt-5 px-3" style={{ background: '#b3f2dd' }}>
                <div className="heading text-center">
                    <h1 className="pb-2" style={{ color: '#2e382e' }}>
                        Create a photo gallery
                    </h1>
                </div>

                <div className="text-center col-md-4 col-sm-6 mx-auto">
                    <p className="text-dark">
                        Relive memories with a Premium photo book. Our unique editor helps you create a world-class photo
                        book. Create photo books together!
                    </p>
                </div>

                <div className="row col-md-8 mx-auto mt-4">
                    <div className="col-md-6 col-sm-12 mb-sm-5">
                        <img src={img1} alt="" height={'210px'} width={'100%'} />
                        <div className="mt-3">
                            <strong>My lifestyle</strong>
                            <p>
                                Add a handy Instagram feed to your website and let your audience get closer to you and see
                                your works in process
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mt-md-5">
                        <img src={img2} alt="" height={'210px'} width={'100%'} />
                        <div className="mt-3 p-0">
                            <strong>My lifestyle</strong>
                            <p>
                                Attract as many views as possible by means of tempting photos you’ll upload to the gallery
                                widget and increase engagement on your website.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="btn pt-sm-5 col-md-2 mx-auto pb-4">
                    {/* Change button text based on user authentication */}
                    {currentUser ? (
                        <Button className="text-dark" variant="outline-light" onClick={()=>toNavigate('/uploading')}>
                            Add Image
                        </Button>
                    ) : (
                        <Button className="text-dark" variant="outline-light" onClick={()=>toNavigate('/gallery')}>
                            Upload Now
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
}

export default UnderCarousel;
