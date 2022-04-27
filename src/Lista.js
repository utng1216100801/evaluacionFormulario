import { Box, FormControlLabel, FormGroup, Switch, Typography } from "@mui/material";
import React from "react";
import { v4 as uuidv4 } from 'uuid';
function Lista(props) {
  return (
    <Box padding={5}>
       <Typography>LIST</Typography>
      <FormGroup>
      {props?.archivos.map(archivo =>
        <FormControlLabel
          control={
            <Switch
              key={uuidv4()}
              checked={archivo.checked}
              onChange={props?.handleChange}
              name={archivo.name}
            />
          }
          label={archivo.label}
        />
      )}
      </FormGroup>
    </Box>
  );
}

export default Lista;
