import { Link } from 'react-router-dom';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useGastos } from '../context/GastosContext';

function obtenerMesActual() {
  const hoy = new Date();
  return `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}`;
}

export default function Dashboard() {
  const { gastos } = useGastos();
  const mesActual = obtenerMesActual();

  const totalMensual = gastos
    .filter(g => g.fecha.startsWith(mesActual))
    .reduce((sum, g) => sum + parseFloat(g.monto), 0);

  return (
    <Card>
      <CardContent className="p-4 space-y-6">
        <h2 style={{ fontSize: '1.5rem', marginBottom: 10 }}>Resumen Financiero</h2>
        <p><strong>Gasto total en {mesActual}:</strong> ${totalMensual.toFixed(2)}</p>

        <div className="space-y-2">
          <Link to="/registrar"><Button>Registrar Gasto</Button></Link>
          <Link to="/visualizar"><Button>Visualizar Gastos</Button></Link>
          <Link to="/reporte"><Button variant="secondary">Generar Reporte Mensual</Button></Link>
        </div>
      </CardContent>
    </Card>
  );
}
