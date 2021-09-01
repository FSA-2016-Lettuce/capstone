import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MemberCard from './MemberCard';
import Container from '@material-ui/core/Container';
import { CenterFocusStrong } from '@material-ui/icons';

const teamInfo = [
  {
    name: 'Jose Fernandez',
    role: 'Developer',
    focus: 'Co-authored map api integration, UI design, front-end specialty',
    linkedIn: 'https://www.linkedin.com/in/josefernandez33/',
    gitHub: 'https://github.com/joseRFernandez',
    image: 'https://avatars.githubusercontent.com/u/75868864?v=4',
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
    <Container>
      {teamInfo.map((dev, idx) => (
        <div className={classes.root} key={idx}>
          <MemberCard dev={dev} />
        </div>
      ))}
    </Container>
  );
};

export default MeetTheTeam;
