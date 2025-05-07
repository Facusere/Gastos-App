import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGastos } from '../context/GastosContext';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

export default function EditarGasto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { gastos, editarGasto } = useGastos();
  const gasto = gastos.find(g => g.id === id);

  const [formData, setFormData] = useState({
    monto: '',
    fecha: '',
    categoria: 'Comida',
    otraCategoria: '',
  });

  useEffect(() => {
    if (gasto) {
      setFormData({
        monto: gasto.monto,
        fecha: gasto.fecha,
        categoria: ['Comida', 'Transporte', 'Salud', 'Educación', 'Entretenimiento'].includes(gasto.categoria)
          ? gasto.categoria
          : 'Otros',
        otraCategoria: ['Comida', 'Transporte', 'Salud', 'Educación', 'Entretenimiento'].includes(gasto.categoria)
          ? ''
          : gasto.categoria,
      });
    }
  }, [gasto]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const categoriaFinal = formData.categoria === 'Otros' ? formData.otraCategoria : formData.categoria;

    editarGasto(id, {
      monto: formData.monto,
      fecha: formData.fecha,
      categoria: categoriaFinal,
    });

    navigate('/');
  };

  if (!gasto) return <p>Gasto no encontrado</p>;

  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <h2 style={{ fontSize: '1.5rem' }}>Editar gasto</h2>
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

          <Button type="submit">Guardar Cambios</Button>
        </form>
      </CardContent>
    </Card>
  );
}
