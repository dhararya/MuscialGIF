import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from 'react-player/soundcloud';
import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import { Gif } from "@giphy/react-components";
import { useAsync } from "react-async-hook";

const useStyles = makeStyles({
  root: {
    margin: "1.5rem 1.5rem"
  }
});

export default function MusicalGIF(props) {
  const classes = useStyles();
  const caption = props.caption;
  const giphyFetch = new GiphyFetch("XIGon8NVdRj2CkMmG1tuAsjsHNjSDVJW");

  function GifDemo() {
    const [gif, setGif] = useState<IGif | null>(null);
    useAsync(async () => {
      const result = await giphyFetch.search(caption, {sort: "relevant", limit: 1});
      const { data } = result.data.length!==0 ? await giphyFetch.gif(String(result.data[0].id)) : await giphyFetch.gif("UoeaPqYrimha6rdTFV");
      setGif(data);
    }, []);
    return gif && <Gif gif={gif} width={700} />
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {GifDemo()}
        <CardContent>
          <Typography variant="body2" color="secondary" component="p">
            {caption}
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
