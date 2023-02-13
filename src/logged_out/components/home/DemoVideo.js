import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
    bigcard: {
    maxWidth: 750,
    padding: 50,
    borderRadius: 50,
    margin: 'auto',
    textAlign: 'center',
    },
});

export default function DemoVideo() {
  const classes = useStyles();

  return (
    <div style={{background: `linear-gradient(to bottom,  #FFDC00 0%, #BFA4F8 100%)`}}>
    <Card className={classes.bigcard}>
        <iframe width="650" height="400" borderRadius="100"
        src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
    </Card>
    </div>
  );
}