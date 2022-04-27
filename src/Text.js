import { Grid, TextField } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function Text(props) {
  return (
    <Grid item xs={6}>
      <TextField
        key={uuidv4()}
        label={props.label}
        variant="outlined"
        fullWidth
        type={props.type}
      ></TextField>
    </Grid>
  );
}

export default Text;
