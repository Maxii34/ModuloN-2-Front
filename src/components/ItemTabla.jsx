export const ItemTabla = ({ turno, fila }) => {
  return (
    <tr>
      <td>{fila}</td>
      <td>{turno.nombreDueno}</td>
      <td>{turno.nombreMascota}</td>
      <td>{turno.fecha.split('T')[0]}</td>
      <td>{turno.horario}</td>
      <td>
        <span className="badge bg-warning fs-6 px-2">
          Pendiente
        </span>
      </td>
      <td className="d-flex justify-content-center gap-1 flex-wrap">
        <button className="btn btn-success text-white shadow">
          <i className="bi bi-check-circle"></i>
        </button>
        <button className="btn btn-secondary text-white shadow">
          <i className="bi bi-eye"></i>
        </button>
        <button className="btn btn-warning text-white shadow">
          <i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-danger text-white shadow">
          <i className="bi bi-x-circle"></i>
        </button>
      </td>
    </tr>
  );
};