import { Grid } from '@mui/material';
import React, {useState} from 'react';
import './App.css';
import Formulario from './Formulario';
import Lista from './Lista';
import archivosJSON from './archivos.json';


function App() {
  const [archivos,setArchivos] = useState(archivosJSON);

  const handleChange = (event) => {
    setArchivos(archivos.map(arc => arc.name === event.target.name?({...arc,"checked": event.target.checked}):arc ) );
    
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Lista handleChange={handleChange} archivos={archivos} />
        </Grid>
        <Grid item xs={6}>
          <Formulario archivos={archivos}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
