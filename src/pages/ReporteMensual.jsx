import { Card, CardContent } from '../components/ui/card';
import { useGastos } from '../context/GastosContext';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

function obtenerMesActual() {
  const hoy = new Date();
  return `${hoy.getFullYear()}-${String(hoy.getMonth() + 1).padStart(2, '0')}`;
}

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a4de6c', '#d0ed57', '#ffbb28'];

export default function ReporteMensual() {
  const { gastos } = useGastos();
  const mesActual = obtenerMesActual();

  const gastosDelMes = gastos.filter(g => g.fecha.startsWith(mesActual));

  const resumenPorCategoria = gastosDelMes.reduce((acc, gasto) => {
    acc[gasto.categoria] = (acc[gasto.categoria] || 0) + parseFloat(gasto.monto);
    return acc;
  }, {});

  const data = Object.entries(resumenPorCategoria).map(([categoria, monto]) => ({
    name: categoria,
    value: monto,
  }));

  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <Card>
      <CardContent className="p-4">
        <h2 style={{ fontSize: '1.5rem' }}>Reporte de Gastos - {mesActual}</h2>
        <p><strong>Total del mes:</strong> ${total.toFixed(2)}</p>

        <h3>Desglose por categoría:</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </CardContent>
    </Card>
  );
}

