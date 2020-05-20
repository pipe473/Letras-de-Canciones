import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

// Definir el state
const [ busquedaletra, guardarBusquedaLetra ] = useState({});

  return (
    <Fragment>
      <Formulario 
        guardarBusquedaLetra={guardarBusquedaLetra}
      />
    </Fragment>
  );
}

export default App;
