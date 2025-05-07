import { useNavigate, useParams } from 'react-router-dom';
import { useGastos } from '../context/GastosContext';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

export default function EliminarGasto() {
  const { index } = useParams();
  const { eliminarGasto } = useGastos();
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <p>¿Seguro que deseas eliminar el gasto?</p>
        <div className="space-x-2">
          <Button onClick={() => { eliminarGasto(parseInt(index)); navigate('/visualizar'); }}>Eliminar</Button>
          <Button variant="secondary" onClick={() => navigate('/visualizar')}>Cancelar</Button>
        </div>
      </CardContent>
    </Card>
  );
}