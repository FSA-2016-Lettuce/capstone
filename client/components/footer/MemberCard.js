import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FullscreenExit } from '@material-ui/icons';

export default function MediaCard(props) {
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      borderRadius: '50%',
      height: '4em',
      width: '4em',
    },
  });

  const classes = useStyles();

  const redirectoToLinkedIn = (e) => {
    window.location.href = props.dev.linkedIn
  };

  const redirectToGithub = (e) => {
    window.location.href = props.dev.gitHub
  }

  const { name, role, focus, linkedIn, gitHub, image } = props.dev;
  console.log('props in membercard', props);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="body2" component="h2">
            {role}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {focus}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          name="github"
          onClick={redirectToGithub}
        >
          Github
        </Button>
        <Button size="small" color="primary" onClick={redirectoToLinkedIn}>
          LinkedIn
        </Button>
      </CardActions>
    </Card>
  );
}
