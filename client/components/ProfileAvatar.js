import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Avatar,
  makeStyles,
  List,
  ListItem,
  ImageList,
  ImageListItem,
  Box,
} from '@material-ui/core';
import { avatarList } from '../../script/seedData';
import { updateUserThunk } from '../store/auth';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    color: theme.pr,
  },
}));

export default function ProfileAvatar(props) {
  const classes = useStyles();
  const user = useSelector((state) => state.auth);

  const [avatarPreview, setAvatarPreview] = useState(user.profileImg);
  const [confirmedImg, setConfirmedImg] = useState(user.profileImg);

  const displayPreview = (e) => {
    setAvatarPreview(e.target.src);
  };



  // i want to display an alert to the user asking to confirm if they want this image as their new profile
  // ideally the image would become bigger and the text would conditionally render if they want to keep their avatar or if they would like to change it

  return (
    <Fragment>
      <Box>
        <div className={classes.imageDiv}>
          <Avatar
            className={classes.avatar}
            id="avatar"
            alt={`${user.username}`}
            src={`${avatarPreview}`}
          />
        </div>
      </Box>
      <ImageList
        variant="round"
        rowHeight={160}
        className={classes.imageList}
        cols={3}
      >
        {avatarList.map((item, idx) => (
          <ImageListItem key={idx} cols={item.cols || 1}>
            <img
              src={item.src}
              alt="my profile image"
              key={idx}
              onClick={imageClickHandler}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Fragment>
  );
}
