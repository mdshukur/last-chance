import React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
import { withTheme } from "@mui/styles";
import { makeStyles } from '@mui/styles';
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";


const useStyles = makeStyles((theme) =>({
  root: {
    background: `linear-gradient(to bottom, #BFA4F8 0%, #FFDC00 100%)`,
    alignItems: 'center',
    flexDirection: 'column',
    display: 'flex',
  },
  bubble1: {
    backgroundColor: '#7DEAC2',
    padding: '20px',
    borderRadius: '100px',
    textAlign: 'center',
    margin: '5px',
    width: '50%',
    color: 'white',
    shadows: '20px 20px 10px #888888',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    border: '5px solid black',
  },
  bubble2: {
    backgroundColor: '#EA7D7D',
    padding: '20px',
    borderRadius: '100px',
    textAlign: 'center',
    margin: '5px',
    width: '50%',
    color: 'white',
    shadows: '20px 20px 10px #888888',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    border: '5px solid black',
  },
  bubble3: {
    backgroundColor: '#7D8EEA',
    padding: '20px',
    borderRadius: '100px',
    textAlign: 'center',
    margin: '5px',
    width: '50%',
    color: 'white',
    shadows: '20px 20px 10px #888888',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    border: '5px solid black',
  },
  featureHeading: {
    textAlign: 'center',
    fontSize: '90px',
    fontFamily: 'Raleway',
  },
}));

function FeatureSection(props) {
  const { theme } = props;
  const classes = useStyles();

  return (
    <div style={{background: `linear-gradient(to bottom, #BFA4F8 0%, #FFDC00 100%)` , alignItems: 'center'}}>
    <div className={classes.root} alignItems= 'center'>
      <br></br>
      <br></br>
      <h1 className={classes.featureHeading}>Feedback.</h1>
      <Paper className={classes.bubble1}><h2 textAlign= 'right'><img src =""/>Personalised AI<br></br> Feedback <u>Every Time</u></h2><h3>Auralyze.ai will transcribe your answer and score you based on real interview criteria. Gone are the days of guessing how you did - let the tech do the hard work!</h3></Paper>
      <h1 className={classes.featureHeading}>Practice.</h1>
      <Paper className={classes.bubble2}><h2 textAlign= 'right'><img src =""/>A Massive Bank of<br></br> Questions</h2> <h3> Have access to questions across multiple courses including : Oxbridge, Medicine, Dentistry and Law.</h3></Paper>
      <h1 className={classes.featureHeading}>Education.</h1>
      <Paper className={classes.bubble3}><h2 textAlign= 'right'><img src =""/> Learn As You Go</h2> <h3> Once you answer your question you will have content triggered relating to what you missed out on. Get that 1-to-1 tuition without having to  pay extortionate fees.</h3></Paper>
    </div>
    <br></br>
    </div>
  );
}

FeatureSection.propTypes = {};

export default withTheme(FeatureSection);
