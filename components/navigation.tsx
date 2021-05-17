import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    color: '#a1045a',
    height: 48,
    padding: '0 30px',
    margin: '10px',
    text: "bold",
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function ClassesShorthand() {
  return <div>
      <StyledButton> <b>Home</b></StyledButton>
      <StyledButton><b>Most Popular Coming Soon...</b></StyledButton>
  </div>
}
