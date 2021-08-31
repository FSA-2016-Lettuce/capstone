import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MemberCard from './MemberCard';

const teamInfo = [
  {
    name: 'Jose Fernandez',
    role: 'Developer',
    focus: 'Co-authored map api integration, UI design, front-end specialty',
    linkedIn: 'https://www.linkedin.com/in/josefernandez33/',
    gitHub: 'https://github.com/joseRFernandez',
    image: 'https://avatars.githubusercontent.com/u/75868864?v=4',
  },
];

// const redirectToExt = (teamMember) => {
//   console.log('teamMember in onclick: ', teamMember)
//   window.location.href = teamInfo[teamMember].linkedIn;
// }

const MeetTheTeam = () => {
  useEffect(() => {
    window.location.href = 'https://google.com/contact';
  }, []);

  const useStyles = makeStyles(() => ({
    spacing: 1,
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '1em',
    },
  }));

  const classes = useStyles();
  return teamInfo.map((dev, idx) => (
    <div className={classes.root} key={idx}>
      <MemberCard dev={dev}  />
    </div>
  ));
};

export default MeetTheTeam;
