import React, { useState } from 'react';
import { cloudinary } from '../../../cloudinary_secrets';
import Axios from 'axios';

export default function CamApp() {
  const [imageSelected, setImageSelected] = useState('');

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "y3hbxa2u");

    Axios.post(
      `https://api.cloudinary.com/v1_1/dioo4pxa2/image/upload`,
      formData
    ).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>Camera Coming Soon</h1>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
    </div>
  );
}
