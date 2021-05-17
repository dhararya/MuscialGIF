import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    color: '#630436',
    height: 48,
    padding: '0 30px',
    margin: '10px'
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

export default function ClassesShorthand() {
  return <div>
      <StyledButton>Home</StyledButton>
      <StyledButton>Most Popular</StyledButton>
  </div>
}
