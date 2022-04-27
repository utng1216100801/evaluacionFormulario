import { Grid, FormControl, Select } from "@mui/material";
import React, { useState } from "react";

function FmSelect(props) {
  const [state, setState] = useState({});

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <Grid item xs={6}>
      <FormControl component="fieldset">
        <Select name="select" value={state} onChange={handleChange}>
          {props?.options.map((dato) => (
            <option value={dato.label}>{dato.label}</option>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}

export default FmSelect;
