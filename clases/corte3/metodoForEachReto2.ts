/* Bitácora de eventos
Tienes un array de objetos evento con descripcion y prioridad (alta, media, baja).
Usa forEach para imprimir cada evento con un emoji diferente según la prioridad
(🔴 alta, 🟡 media, 🟢 baja) y la descripción. */

const eventos = [
  { descripcion: "Reunión con el equipo", prioridad: "alta" },
  { descripcion: "Entrega de proyecto", prioridad: "media" },
  { descripcion: "Revisión de documentos", prioridad: "baja" }
];

eventos.forEach((evento) => {
  let emoji;
  switch (evento.prioridad) {
    case "alta":
      emoji = "🔴";
      break;
    case "media":
      emoji = "🟡";
      break;
    case "baja":
      emoji = "🟢";
      break;
    default:
      emoji = "⚪";
  }
  console.log(`${emoji} ${evento.descripcion}`);
});
