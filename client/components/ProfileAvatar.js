import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';
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

console.log(avatarList);
const ProfileAvatar = (props) => {
  const classes = useStyles();
  return (
    <Fragment>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {avatarList.map((item, idx) => (
          <ImageListItem
            key={idx}
            cols={item.cols || 1}
            src={item.name}
            alt={item.idx}
          ></ImageListItem>
        ))}
      </ImageList>
      ;
    </Fragment>
  );
};

export default ProfileAvatar;
