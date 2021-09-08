import React, { useState } from 'react';
import cloudinary from '../../../cloudinary_secrets';
import Axios from 'axios';
import { Image } from 'cloudinary-react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { updateUserThunk } from '../../store/auth';
import { Button, Input } from '@material-ui/core';

export default function CamApp() {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    image: {
      width: '30%',
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      margin: theme.spacing(1),
      background: 'primary'
    },
    preview: {
      width: '3em'
    }
  }));

  const [imageSelected, setImageSelected] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);
  const user = useSelector((state) => state.auth);

  const [publicId, setPublicId] = useState(user.profileImg);
  console.log(user);
  const dispatch = useDispatch();

  const uploadImage = () => {
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', cloudinary.upload_preset);

    //handling post to cloudinary here for now
    Axios.post(
      `${cloudinary.URL}/${cloudinary.cloud_name}/image/upload`,
      formData
    ).then(async (response) => {
      const userWithImage = { ...user, profileImg: response.data.url };
      await dispatch(updateUserThunk(userWithImage));
      setPublicId(response.data.url);
      setFileUploaded(true);
    });
  };
  const classes = useStyles();

  return fileUploaded === false ? (
    <div className={classes.root}>
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <Button className={classes.button} onClick={uploadImage}>Upload Image</Button>
      <Image
        className={classes.preview}
        cloudName={`${cloudinary.cloud_name}`}
        publicId={publicId}
      />
      <Button onClick={() => console.log(user)}>Get User Info</Button>
    </div>
  ) : (
    <div>
      <Input
        type="file"
        accept= 'image/png'
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <Button className={classes.button} onClick={uploadImage}>Choose Another</Button>
      <Image className={classes.preview} src={user.profileImg} />
    </div>
  );
}
