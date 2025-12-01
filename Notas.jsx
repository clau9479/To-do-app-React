export default function Notas({ tarea, toggleCompletada, eliminarTarea, cambiarColor }) {
  return (
    <div
      className="tarea"
      style={{
        background: tarea.color,
        textDecoration: tarea.completada ? "line-through" : "none",
        opacity: tarea.completada ? 0.6 : 1,
      }}
      >
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => toggleCompletada(tarea.id)}
      />

      <span className="texto-tarea">{tarea.texto}</span>

      <input
        type="color"
        value={tarea.color}
        onChange={(e) => cambiarColor(tarea.id, e.target.value)}
      />

      <button className="botonEliminar" onClick={() => eliminarTarea(tarea.id)}>
        X
      </button>
    
    </div>
  );
}