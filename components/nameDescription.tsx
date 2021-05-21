import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    color: "#710193",
  },
});

export default function NameDescription() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h3" gutterBottom>
        <b>Musical GIF</b>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Musical GIF is service that takes in a custom caption, and returns an appropriate GIF and random Soundcloud song to play with it. Below, is an example of what can be created. Try it yourself now!
      </Typography>
    </div>
  );
}
