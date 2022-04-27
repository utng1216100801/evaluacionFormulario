import {Grid, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from "uuid";

function FmRadio(props) {
  return (
    <Grid item xs={6}>
    <FormControl component="fieldset">
      <RadioGroup
        key={uuidv4()}
        aria-label="gender"
        name="gender1"
        // value={value}
        // onChange={handleChange}
      >{props?.options.map( dato =>
          <FormControlLabel value={dato.label} control={<Radio />} label={dato.label} />
      )}
      </RadioGroup>
    </FormControl>
    </Grid>
  );
}

export default FmRadio;
