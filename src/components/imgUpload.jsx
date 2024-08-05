import React, { useState } from 'react';
import NavbarP from './Navbar';
import Footer from './Footer';
import { v4 } from 'uuid';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ref as dbRef, set } from 'firebase/database';
import { storage, database } from './firebase';
import { useAuth } from './AuthContext'; // Adjust the path as needed

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { currentUser } = useAuth(); // Get the current user from context

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDeleteImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the image upload logic here
    console.log('Image uploaded:', selectedImage);
  };

  const uploaded = async () => {
    try {
      if (selectedImage && currentUser) {
        const imgRef = ref(storage, `users/${currentUser.uid}/imgs/${v4()}`);
        await uploadBytes(imgRef, selectedImage).then(data => {
          return getDownloadURL(data.ref);
        }).then(url => {
          // Store the download URL in the Realtime Database
          const imageRef = dbRef(database, `users/${currentUser.uid}/images/${v4()}`);
          set(imageRef, {
            imageUrl: url,
            uploadedAt: Date.now()
          });
          alert('Uploaded successfully');
        });
      } else {
        alert('Select the image first');
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <div className='mb-5'>
        <NavbarP />
      </div>
      <div className="container mt-5 mb-5">
        <h2 className='mt-5 mb-5 text-center'>Upload Your Favorite Image</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 col-md-8 mx-md-auto">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-control"
            />
          </div>
          {previewUrl && (
            <div className="mb-3 d-flex justify-content-center">
              <img src={previewUrl} alt="Preview" style={{ width: '100%', maxWidth: '300px' }} />
            </div>
          )}
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary" onClick={uploaded}>
              Upload
            </button>
            {previewUrl && (
              <button
                type="button"
                className="btn btn-danger ml-3"
                onClick={handleDeleteImage}
              >
                Remove
              </button>
            )}
          </div>
        </form>
      </div>
      <div className='mt-5'>
        <Footer />
      </div>
    </>
  );
}

export default ImageUpload;
