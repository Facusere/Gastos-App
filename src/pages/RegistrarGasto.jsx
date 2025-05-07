import { useState } from 'react';
import { useGastos } from '../context/GastosContext';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function RegistrarGasto() {
  const { agregarGasto } = useGastos();
  const [formData, setFormData] = useState({
    monto: '',
    fecha: '',
    categoria: 'Comida',
    otraCategoria: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const categoriaFinal =
      formData.categoria === 'Otros' ? formData.otraCategoria : formData.categoria;

    agregarGasto({
      monto: formData.monto,
      fecha: formData.fecha,
      categoria: categoriaFinal,
    });

    setFormData({
      monto: '',
      fecha: '',
      categoria: 'Comida',
      otraCategoria: '',
    });
  };

  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <h2 style={{ fontSize: '1.5rem' }}>Registrar nuevo gasto</h2>
        <form onSubmit={handleSubmit}>
          <Input
            name="monto"
            placeholder="Monto"
            type="number"
            value={formData.monto}
            onChange={handleChange}
          />
          <Input
            name="fecha"
            placeholder="Fecha"
            type="date"
            value={formData.fecha}
            onChange={handleChange}
          />

          <label>Categoría</label>
          <select
            name="categoria"
            value={formData.categoria}
            onChange={handleChange}
            style={{ padding: 8, marginBottom: 10, width: '100%' }}
          >
            <option>Comida</option>
            <option>Transporte</option>
            <option>Salud</option>
            <option>Educación</option>
            <option>Entretenimiento</option>
            <option>Otros</option>
          </select>

          {formData.categoria === 'Otros' && (
            <Input
              name="otraCategoria"
              placeholder="Especificar otra categoría"
              value={formData.otraCategoria}
              onChange={handleChange}
            />
          )}

          <Button type="submit">Guardar Gasto</Button>
        </form>
      </CardContent>
    </Card>
  );
}
