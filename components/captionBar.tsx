import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100ch"
    }
  }
}));

export default function ComposedTextField() {
  const [name, setName] = React.useState("Insert your custom caption here");
  const classes = useStyles();

  const handleChange = (event) => {
    setName(event.target.value);
    localStorage.setItem("caption", event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Caption</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={name}
          onChange={handleChange}
          label="Caption"
        />
        <Button
          variant="contained"
          color="secondary"
          href = "./creation"
        >
          Generate Musical GIF
        </Button>
      </FormControl>
    </form>
  );
}
