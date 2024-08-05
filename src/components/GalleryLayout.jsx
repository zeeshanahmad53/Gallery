// GalleryLayout.js
import React, { useState, useEffect } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import PopupCard from './PopUpImageView';
import { getDatabase, ref as dbRef, get } from 'firebase/database';
import { databaseAuth } from './firebase'; // Import Firebase databaseAuthentication
import '../components/GalleryLayout.css';

function GalleryLayout() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', title: '', dateTime: '' });
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchUserImages = async () => {
      try {
        // Ensure the user is databaseAuthenticated
        const user = databaseAuth.currentUser;
        if (user) {
          // Get current user's unique identifier
          const userId = user.uid;
          console.log("User ID:", userId);  // Debugging line

          // Reference to the current user's images in Firebase Realtime Database
          const db = getDatabase();
          const userImagesRef = dbRef(db, `users/${userId}/images`);
          console.log("User Images Ref:", userImagesRef);  // Debugging line

          // Get the images from the Realtime Database
          const snapshot = await get(userImagesRef);
          if (snapshot.exists()) {
            const imagesData = snapshot.val();
            console.log("Images Data:", imagesData);  // Debugging line

            // Extract image URLs and other data
            const urls = Object.values(imagesData).map(image => ({
              src: image.imageUrl,
              title: 'Image Title', // You can replace this with actual title if available
              dateTime: new Date(image.uploadedAt).toLocaleString() // Convert timestamp to readable date
            }));
            console.log("Image URLs:", urls);  // Debugging line

            // Set the image URLs
            setImageUrls(urls);
          } else {
            console.log("No images found.");
          }
        } else {
          console.error('No user is currently signed in.');
        }
      } catch (error) {
        console.error('Error fetching user images:', error);
      }
    };

    // Fetch user images when component mounts
    fetchUserImages();
  }, []);

  const handleImageClick = (src, title, dateTime) => {
    setSelectedImage({ src, title, dateTime });
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='text-center mt-4'>
        <h3>Your Collection</h3>
      </div>

      <Container>
        <Row className='mt-3 mb-3'>
          {imageUrls.map((image, index) => (
            <Col key={index} sm={12} md={4}>
              <div className="image-container" onClick={() => handleImageClick(image.src, image.title, image.dateTime)}>
                <Image src={image.src} className='img col-12 mb-md-5' />
                {/* <div className='overlay-text'>
                  <p>{image.title}</p>
                  <p>{image.dateTime}</p>
                </div> */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <PopupCard
        show={showPopup}
        onClose={handleClosePopup}
        imgSrc={selectedImage.src}
        title={selectedImage.title}
        dateTime={selectedImage.dateTime}
      />
      
      <div>
        <Footer />
      </div>
    </>
  );
}

export default GalleryLayout;
