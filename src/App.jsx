import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [datosPrograma, setDatosPrograma] = useState(
    {
      id: "",
      nombreProgramador: "",
      tiempo: "",
      operacion: "suma"
    }
  );


  const handleCampo = (event) => {
    setDatosPrograma({
    ...datosPrograma,
      [event.target.name]: event.target.value
    });
    localStorage.setItem(event.target.name, event.target.value);
    console.log(datosPrograma);
  }


  const limpiarDatos = (event) => {
    event.preventDefault();
    setDatosPrograma({
      id: "",
      nombreProgramador: "",
      tiempo: "",
      operacion: "suma"
    });
    localStorage.clear();
    console.log(datosPrograma);
  }


  useEffect(() => {
    setDatosPrograma({
      id: localStorage.getItem('id'),
      nombreProgramador: localStorage.getItem('nombreProgramador'),
      tiempo: localStorage.getItem('tiempo'),
      operacion: localStorage.getItem('operacion')
    });
  }, [])


  return (
    <div className="App">
      <h1>Persistencia de datos</h1>
      <h2 style={{marginBottom:'10%'}}>Registrar procesos</h2>
      <div className='contenedor'>
        <label className='etiqueta'>ID de proceso</label>
        <input className='campo' placeholder='ID proceso' type='text' onChange={handleCampo} name="id" value={datosPrograma.id}></input>
      </div>
      <div className='contenedor'>
        <label className='etiqueta'>Nombre programador</label>
        <input className='campo' placeholder='Nombre programador' type='text' onChange={handleCampo} name="nombreProgramador" value={datosPrograma.nombreProgramador}></input>
      </div>
      <div className='contenedor'>
        <label className='etiqueta'>Tiempo estimado</label>
        <input className='campo' placeholder='Tiempo estimado' type='text' onChange={handleCampo} name="tiempo" value={datosPrograma.tiempo}></input>
      </div>
      <div className='contenedor'>
        <label className='etiqueta'>Operacion a realizar</label>
        <input className='campo' placeholder='Operacion a realizar' type='text' onChange={handleCampo} name="operacion" value={datosPrograma.operacion}></input>
      </div>
      <div className='contenedor'>
        <button className='btn' id="btnVaciar" type='onClick' onClick={limpiarDatos}>Vaciar campos</button>
      </div>
    </div>
  )
}

export default App
