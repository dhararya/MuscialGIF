import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: "#710193",
    padding: "2rem 2rem",
  },
});

export default function NameDescription() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h2" gutterBottom>
        <b>Musical GIF</b>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Musical GIF is service that takes in a custom caption, and returns an appropriate GIF and Spotify song to play with it. Below, is a custom-made version for the caption "Musical GIF will not give up on your musical GIF needs". Try it yourself now!
      </Typography>
    </div>
  );
}
