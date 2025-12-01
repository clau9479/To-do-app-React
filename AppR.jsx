import { useState } from "react";
import Notas from "./Notas.css";
import Notas from "./Notas.jsx";

export default function AppR() {
  const[tareas,setTareas]= useState(()=>{
    const guardadas=localStorage.getItem("tareas");
    return guardadas ? JSON.parse(guardadas) :[];
  });
  const [textoNuevo,setTextoNuevo]= useState("");
  const [busqueda,setBusqueda]= useState("");

  const guardarLs =(nuevasTareas) =>{
    localStorage.setItem("tareas", JSON.stringify(nuevasTareas));
  };

  const agregarTarea = ()=>{
    if (!textoNuevo.trim()) return;

    const nueva ={
      id:Date.now(),
      texto:textoNuevo.trim(),
      completada: false,
      color: "grey",
    };

    const nuevas =[...tareas, nueva];
    setTareas(nuevas);
    guardarLs(nuevas);
    setTextoNuevo("")
  };
  const toggleCompletada =(id) =>{
    const nuevas = tareas.map ((t)=>
    t.id === id ? {...t,completada : !t.completada} : t
  );
  setTareas (nuevas);
  guardarLs (nuevas);
  };
  const eliminarTarea = (id) =>{
    const nuevas = tareas.filter ((t) => t.id !== id);
    setTareas(nuevas);
    guardarLs(nuevas);
  };
  const cambiarColor = (id, color) => {
    const nuevas = tareas.map ((t)=>
    t.id === id ? {...t, color} : t
  );
  setBusqueda(nuevas);
  guardarLs (nuevas);
  };
  const eliminarCompletadas = () =>{
    const nuevas = tareas.filter ((t)=> !t.completada);
    setTareas (nuevas);
    guardarLs (nuevas);
  };
  const tareasFiltradas = tareas.filter ((t)=>
   t.texto.toLowerCase().includes(busqueda.toLowerCase())
 );
 const tareasOrdenadas =[...tareasFiltradas].sort(
  (a,b) => Number(a.completada) - Number (b.completada)
 );
  
  return (
    
    <div className="contenedor">
    <h1>To Do App React</h1>
      
      <div className="formulario">
      <input
        type="text"
        placeholder="Nueva tarea"
        value={textoNuevo}
        onChange={(e)=> setTextoNuevo(e.target.value)}
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
      onClick={eliminarCompletadas}>Eliminar completadas</button>

      <div className="lista">
        {tareasOrdenadas.map((t) =>(
        <Notas
        key={t.id}
        tarea={t}
        toggleCompletada={toggleCompletada}
        eliminarTarea={eliminarTarea}
        cambiarColor={cambiarColor}
        />
      ))}
      </div>

    </div>
    
    
    
  
  );
}


