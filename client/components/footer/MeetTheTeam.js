import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberCard from './MemberCard';
import Container from '@material-ui/core/Container';
import { CenterFocusStrong } from '@material-ui/icons';

const teamInfo = [
  {
    name: 'Chris Nieves',
    role: 'Developer',
    focus:
      'Co-creator of many components with the use of many lines of code which consist of many characters',
    linkedIn: 'https://www.linkedin.com/in/christophernieves20/',
    gitHub: 'https://github.com/Nievescs20',
    image:
      'https://avatars.githubusercontent.com/u/63509338?s=400&u=f1fd9eba63c9a5269c947adf079e29fcc13918d0&v=4',
  },
  {
    name: 'Jared Melnyk',
    role: 'Developer',
    focus:
      'Built out database models, implemented Single Run View, Create Run & Join Run components',
    linkedIn: 'https://www.linkedin.com/in/jared-melnyk/',
    gitHub: 'https://github.com/jared-melnyk',
    image: 'https://avatars.githubusercontent.com/u/12187087?v=4',
  },
  {
    name: 'Jose Fernandez',
    role: 'Developer',
    focus: 'Co-authored map api integration, User Stats, Profile Avatar, Instructional Modal',
    linkedIn: 'https://www.linkedin.com/in/josefernandez33/',
    gitHub: 'https://github.com/joseRFernandez',
    image: 'https://avatars.githubusercontent.com/u/75868864?v=4',
  },
  {
    name: 'Scott Scheine',
    role: 'Developer',
    focus:
      'Designed vertical slices of the application, such as Create Route Path and Find Run.',
    linkedIn: 'https://www.linkedin.com/in/scott-scheine/',
    gitHub: 'https://github.com/SRScheine',
    image:
      'https://avatars.githubusercontent.com/u/83229726?s=400&u=b1b150461011fd99ec68fb37f58c6a8132a0945e&v=4',
  },
];

const MeetTheTeam = () => {
  const useStyles = makeStyles(() => ({
    spacing: 1,
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '1em',
      justifyContent: 'center',
    },
  }));

  const classes = useStyles();
  return (
    <Container className={classes.root}>
      {teamInfo.map((dev, idx) => (
        <div className={classes.root} key={idx}>
          <MemberCard dev={dev} />
        </div>
      ))}
    </Container>
  );
};

export default MeetTheTeam;
