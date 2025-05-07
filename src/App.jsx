import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import RegistrarGasto from './pages/RegistrarGasto';
import VisualizarGastos from './pages/VisualizarGastos';
import EditarGasto from './pages/EditarGasto';
import EliminarGasto from './pages/EliminarGasto';
import ReporteMensual from './pages/ReporteMensual';
import { GastosProvider } from './context/GastosContext';

function App() {
  return (
    <GastosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/registrar" element={<RegistrarGasto />} />
          <Route path="/visualizar" element={<VisualizarGastos />} />
          <Route path="/editar/:index" element={<EditarGasto />} />
          <Route path="/eliminar/:index" element={<EliminarGasto />} />
          <Route path="/reporte" element={<ReporteMensual />} />
        </Routes>
      </Router>
    </GastosProvider>
  );
}

export default App;
