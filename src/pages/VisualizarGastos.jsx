import { Link } from 'react-router-dom';
import { useGastos } from '../context/GastosContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function VisualizarGastos() {
  const { gastos } = useGastos();

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        {gastos.length === 0 ? (
          <p>No hay gastos registrados.</p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Categoría</th>
                <th>Monto</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {gastos.map((gasto, index) => (
                <tr key={index}>
                  <td>{gasto.fecha}</td>
                  <td>{gasto.categoria}</td>
                  <td>{gasto.monto}</td>
                  <td>
                    <Link to={`/editar/${index}`}><Button size="sm">Editar</Button></Link>
                    <Link to={`/eliminar/${index}`}><Button size="sm" variant="destructive">Eliminar</Button></Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <Link to="/"><Button variant="secondary">Volver</Button></Link>
      </CardContent>
    </Card>
  );
}