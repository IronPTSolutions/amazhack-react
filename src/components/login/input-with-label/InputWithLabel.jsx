import "./InputWithLabel.css";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function InputWithLabel({ value, label, onChange, type }) {
  const classes = useStyles();
  return (
    <div className="InputWithLabel pt-5">
      <TextField id="standard-basic"
        label={label}
        name={label}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={label}
      />
      {/* <label htmlFor={label}>{label}</label>
      <input
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={label}
      /> */}
    </div>
  );
}
