import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Text from './Text';
import Select from './FmSelect';
import Radio from './FmRadio';

function Formulario(props) {
  return (
    <Box padding={5}>
      <Typography>FORM</Typography>
      <form >
        <Grid container spacing={3}>
          {props?.archivos.map(archivo => archivo.checked?
            archivo.component === "select"? <Select label={archivo.label} name={archivo.name} type={archivo.type} options={archivo.option}/>:
            archivo.component === "radio"? <Radio label={archivo.label} type={archivo.type} options={archivo.option}/>:
              <Text label={archivo.label} type={archivo.type}/>
            :null
          )}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" disableElevation>SUBMIT</Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default Formulario;
