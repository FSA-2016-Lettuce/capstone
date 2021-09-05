import React, { Fragment } from 'react';
import { Avatar, makeStyles, List, ListItem } from '@material-ui/core';
import { ImageList, ImageListItem } from '@material-ui/core';
import { avatarList } from '../../script/seedData';

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

const ProfileAvatar = (props) => {
  const classes = useStyles();
  console.log('image in avatarList:', avatarList[0].src)
  return (
    <ImageList rowHeight={160} className={classes.imageList} cols={3}>
  {avatarList.map((item, idx) => (
    <ImageListItem key={item.idx} cols={item.cols || 1}>
      <img src={item.src} alt={idx} onClick={() =>console.log(idx)}/>
    </ImageListItem>
  ))}
</ImageList>
  );
};

export default ProfileAvatar;
