import { createContext, useContext, useState } from 'react';

const GastosContext = createContext();

export function GastosProvider({ children }) {
  const [gastos, setGastos] = useState([]);

  const agregarGasto = (gasto) => setGastos([...gastos, gasto]);
  const editarGasto = (index, nuevoGasto) => {
    const nuevos = [...gastos];
    nuevos[index] = nuevoGasto;
    setGastos(nuevos);
  };
  const eliminarGasto = (index) => setGastos(gastos.filter((_, i) => i !== index));

  return (
    <GastosContext.Provider value={{ gastos, agregarGasto, editarGasto, eliminarGasto }}>
      {children}
    </GastosContext.Provider>
  );
}

export function useGastos() {
  return useContext(GastosContext);
}