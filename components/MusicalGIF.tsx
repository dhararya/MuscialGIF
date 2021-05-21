import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ReactPlayer from 'react-player/soundcloud';
import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";
import { Gif } from "@giphy/react-components";
import { v4 as uuidv4 } from 'uuid';
import { db } from "../utils/firebase/firebase";
import firebase from "firebase/app";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { CopyToClipboard } from 'react-copy-to-clipboard';

//Styles for the component
const useStyles = makeStyles({
  root: {
    margin: "1rem 0rem"
  },
  form: {
    "& > *": {
      margin: "0.5rem 0.5rem"
    }
  }
  }
);

//soundCloud soundBoard links
const sounds = ["https://soundcloud.com/shadowlegionary/nyan-cat", "https://soundcloud.com/hampsterdancemasters/the-hamster-dance-song",
"https://soundcloud.com/tayzonday/chocolate-rain",  "https://soundcloud.com/tayzonday/chocolate-rain", 
"https://soundcloud.com/xpriteshx/fatality-mortal-kombat-sound-effect", "https://soundcloud.com/mlg_getrekt/sad-violin-music-mlg-sound-1",
"https://soundcloud.com/tom-m-c/what-are-you-doing-in-my-swamp", "https://soundcloud.com/thepopposse/never-gonna-give-you-up",
"https://soundcloud.com/tornupto-12/deja-vu-meme", "https://soundcloud.com/alexis-tapia-najar/run-vine-sound-effect-mp3-1",
"https://soundcloud.com/user-992367524/they-ask-you-how-you-areand-youre-not-really-fine-meme", "https://soundcloud.com/blackout-the-gearhead/mr-krabs-astronomia-coffin-dance-meme-4ydngbcnaze",
"https://soundcloud.com/remaings/ladies-and-gentlemen-we-got-em-meme", "https://soundcloud.com/danyal-460888021/cj-gta-ah-shit-here-we-go-again-green-screen", "https://soundcloud.com/magnus-theil-jensen/fbi-open-up",
"https://soundcloud.com/childish-gambino", "https://soundcloud.com/britarnya/america-fuck-yeah", "https://soundcloud.com/cherrykachu/wide-putin-meme",
"https://soundcloud.com/untamed-spirit/funny-minecraft-villager", "https://soundcloud.com/jeff-jeff-153823913/french-meme-song",
"https://soundcloud.com/user-307209404", "https://soundcloud.com/search?q=coronavirus%20cardib", "https://soundcloud.com/your_text_spoken/hello-darkness-my-old-friend",
"https://soundcloud.com/baauer/harlem-shake", "https://soundcloud.com/pawpaw-114353728",
"https://soundcloud.com/search?q=sandstorm", "https://soundcloud.com/kn900/ppap"];

export default function MusicalGIF(props) {
  //GIPHY authentiction
  const giphyFetch = new GiphyFetch("XIGon8NVdRj2CkMmG1tuAsjsHNjSDVJW");
  const classes = useStyles();
  //determines if we are loading a link or the homepage
  const [isSet, setisSet] = useState(props.isSet);
  //unique link extension should the user choose to save
  const [uniqueLinkExt, setuniqueLinkExt] = useState(props.linkExt);
  //gif metadata
  const [gif, setGif] = useState<IGif | null>(null);
  //gifID from GIPHY
  const [gifID, setgifID] = useState(props.gifID);
  //Caption that is displayed to the use
  const [displayCaption, setdisplayCaption] = useState(props.caption);
  //Caption entered by the user
  const [name, setName] = React.useState("");
  //Soundcloud link
  const [sound, setSound] = React.useState(props.sound)

  //Updates name when the user types in the textfield
  function handleChange(e){
      setName(e.target.value);
  };

  //Updates Caption when submit button is clicked
  function handleClick(e){
    setdisplayCaption(name)
    setisSet(false);
  };
 
  //Overrides refresh when enter is pressed, and updates the displayCaption. Also sets isSet to false.
  function handleKeyPress(e){
    if (e.charCode === 13){
      e.preventDefault();
      setdisplayCaption(name);
      setisSet(false);
    }
  }

  //Fetches the GIF ID appropriate to caption
  const fetchGifID = async () => {
    if (!isSet){
      //if not set, we return seven search results based on relevance and we choose one randomly
      const result = await giphyFetch.search(displayCaption, {sort: "relevant", limit: 7});
      if (result.data.length!==0){
        let randInt = Math.floor(Math.random()*result.data.length);
        setgifID(String(result.data[randInt].id));
      } else {
        //if no results are return we update display caption and assign an appropriate gif
        setdisplayCaption("No results found!");
        setgifID("UoeaPqYrimha6rdTFV")
      }
    } else {
      //if set, we want to return the right gifID
      setgifID(props.gifID);
    }
  
  }

  //fetch GifID if displayCaption changes
  useEffect(() => {
    fetchGifID();
  }, [displayCaption])

  //fetch gif metadata using ID
  const fetchGif = async () => {
    const { data } = await giphyFetch.gif(gifID);
    setGif(data);
    }
  
  //returns the sound cloud URL
  function returnSoundURL(){{
    if (isSet){
      setSound(props.sound);
    } else if (displayCaption==="No results found!"){
      setSound("https://soundcloud.com/soundeffectsforfree/baby-crying-sound-effect");
    } else if (displayCaption==="Musical GIF will never give you up"){
      setSound("https://soundcloud.com/thepopposse/never-gonna-give-you-up");
    } else {
      setSound(sounds[Math.floor(Math.random()*sounds.length)]);
    }
  }}
  
  //Saves page to Firebase
  function createPage(){
  if (displayCaption !== "No results found!" && displayCaption !== "Musical GIF will never give you up" && displayCaption!=="Invalid Link!") {
    db.collection("creation").add({
      linkExt: String(uniqueLinkExt),
      caption: displayCaption,
      gif_id: gifID,
      sound: String(sound),
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  }

  //If gifID changes, it fetches gif metadata and an appropriate sound. If page is not set, it also chooses a unique link extension.
  useEffect(() => {
    fetchGif();
    returnSoundURL();
    if (!isSet){
      setuniqueLinkExt(String(uuidv4()));
    }
  }, [gifID])


  //Renders a link button if isSet is false
  function generateLinkButton(){
    let url = ""
    if (typeof window !== "undefined"){
      if (window.location.hostname == "localhost"){
        url = "localhost:3000/"+uniqueLinkExt
      } else {
        url = "www.gifii.fun/"+uniqueLinkExt
      }
    //on click, url is copied onto clipboard and is reset in browser
    if (!isSet){
      return <CopyToClipboard text={url}><Button
      variant="contained"
      color="primary"
      disabled = {false}
      onClick = {() => {
        createPage();
        window.history.replaceState("Unique Link", "GIF", uniqueLinkExt);
      }}
      > GENERATE AND COPY UNIQUE LINK TO CLIPBOARD
      </Button>
      </CopyToClipboard> 
    }
  }
  }

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea >
          {gif && <Gif gif={gif} width={visualViewport.width*0.5}/>}
          <CardContent>
            <Typography variant="body2" color="secondary" component="p">
              {displayCaption}
            </Typography>
          </CardContent>
          <ReactPlayer 
              url= {sound}
              height= {80}
              playing= {true}
              
          />
        </CardActionArea>
      </Card>
      <FormControl variant="outlined" fullWidth={true}>
        <TextField
          id="filled-basic"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          label="Caption"
          variant="filled"
        />
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClick}
        >
          Generate Musical GIF
        </Button>

        {generateLinkButton()}
      </FormControl>
  </div>
  );
}
