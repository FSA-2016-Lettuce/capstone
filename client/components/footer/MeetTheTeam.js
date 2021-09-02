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
      'https://media-exp1.licdn.com/dms/image/C4E03AQGNqwS2buXonA/profile-displayphoto-shrink_800_800/0/1629979232073?e=1635984000&v=beta&t=1Ou09S9qRChQ9yp9xwuSpBM_5emPoNBc8lAVbQwjntg',
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
    focus: 'Co-authored map api integration, UI design, front-end specialty',
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
