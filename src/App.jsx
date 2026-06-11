import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Nosotros from './pages/Nosotros'
import SeguroAutomotor from './pages/SeguroAutomotor'
import SeguroHogar from './pages/SeguroHogar'
import FormasDePago from './pages/FormasDePago'
import ReclamoAutomotor from './pages/ReclamoAutomotor'
import ReclamoTercero from './pages/ReclamoTercero'
import ReclamoHogar from './pages/ReclamoHogar'
import ReclamoVida from './pages/ReclamoVida'
import AfiliadoActivo from './pages/AfiliadoActivo'
import AfiliadoJubilado from './pages/AfiliadoJubilado'
import Promociones from './pages/Promociones'
import Rse from './pages/Rse'
import InformacionUtil from './pages/InformacionUtil'
import AuxilioMecanico from './pages/AuxilioMecanico'
import Contacto from './pages/Contacto'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/seguros/automotor" element={<SeguroAutomotor />} />
          <Route path="/seguros/hogar" element={<SeguroHogar />} />
          <Route path="/formas-de-pago" element={<FormasDePago />} />
          <Route path="/siniestros/automotor-asegurados" element={<ReclamoAutomotor />} />
          <Route path="/siniestros/automotor-terceros" element={<ReclamoTercero />} />
          <Route path="/siniestros/hogar" element={<ReclamoHogar />} />
          <Route path="/siniestros/vida" element={<ReclamoVida />} />
          <Route path="/afiliados/activo" element={<AfiliadoActivo />} />
          <Route path="/afiliados/jubilado" element={<AfiliadoJubilado />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/rse" element={<Rse />} />
          <Route path="/informacion-util" element={<InformacionUtil />} />
          <Route path="/auxilio-mecanico" element={<AuxilioMecanico />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
