import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from 'react-player/soundcloud'

const useStyles = makeStyles({
  root: {
  }
});

export default function MusicalGIF() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Never Gonna Give You Up GIF"
          height="50%"
          src="https://media1.giphy.com/media/kFgzrTt798d2w/giphy.gif?cid=ecf05e47c64xiyjfzszgaeiyozbmsiqrg9wcwi7xwnqhnvkd&rid=giphy.gif&ct=g"
        />
        <CardContent>
          <Typography variant="body2" color="secondary" component="p">
            Musical GIF will not give up on your musical GIF needs
          </Typography>
        </CardContent>
        <ReactPlayer 
            url='https://soundcloud.com/thepopposse/never-gonna-give-you-up'
            height= {100}
            playing= {true}
            
         />
      </CardActionArea>
    </Card>
  );
}
