import React from "react";
import Notas from "./Notas.css";
import Notas from "./Notas.jsx";

export default function AppR() {
  return (
    
    <div className="contenedor">
    <h1>To Do App React</h1>
      
      <div className="Formulario">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={textonuevo}
        onchange={(e)=> setTextoNuevo(e.target.value)}
        className="input" 
        />
      <button className="boton" onClick={agregarTarea}>Agregar</button>
     </div>
      
      <input type="text"
      placeholder="Buscar Tarea"
      value={busqueda}
      onChange={(e)=>setBusqueda(e.target.value)}
      className="input"/>
      
      <button className="botonRojo"
      onClick={eliminarCompletadas}>Elimninar completadas</button>

      <div className="lista">
        {tareasOrdenadas.map((t) =>(
        <Notas
        key={t.id}
        tarea={t}
        toggleCompletada={togglecompletada}
        eliminarTarea={eliminarTarea}
        cambiarColor={cambiarColor}
        />
      ))}
      </div>

    </div>
    
    
    
  
  );
}


