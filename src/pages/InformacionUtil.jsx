import { useState, useEffect, useCallback } from 'react'

const slides = [
  { src: '/images/SliderInformacionUtil/Banner_Moura1.jpg', alt: 'Moura 1' },
  { src: '/images/SliderInformacionUtil/Banner_Moura2.jpg', alt: 'Moura 2' },
  { src: '/images/SliderInformacionUtil/Banner_TopNeum.jpg', alt: 'Top Neumáticos' },
  { src: '/images/SliderInformacionUtil/Banner_Maynar.jpg', alt: 'Maynar' },
]

function InfoSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative w-full overflow-hidden bg-gray-200 mt-1" style={{ height: 'clamp(120px, 14vw, 200px)' }}>
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.src} alt={slide.alt} className="mx-auto h-full w-auto max-w-full" />
        </div>
      ))}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${i === current ? 'bg-primary w-5 h-2' : 'bg-primary/40 w-2 h-2 hover:bg-primary/60'}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}

function InformacionUtil() {
  return (
    <>
      <InfoSlider />
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">SOS Hogar</h2>
            <p className="text-gray-600 mb-4">A partir del 1° de Marzo del corriente año contamos con mas beneficios para su póliza de Combinado Familiar Tradicional y/o Planes cerrados.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 text-sm text-blue-800">
              <strong>Asistencia:</strong> Llame al <strong>0800-333-2753</strong> informando: Nombre y apellido del titular, N° de póliza, dirección del inmueble asegurado e inconveniente a solucionar.
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left font-semibold">Servicio</th>
                    <th className="p-3 text-left font-semibold">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'PLOMERÍA', desc: 'Reparación de desperfectos en caños a la vista, pérdidas en conexiones de artefactos de baño y cocina, rotura de llaves de paso o esclusas. 3 Eventos Anuales - Tope por Evento $ 29.250' },
                    { name: 'CERRAJERÍA', desc: 'Destrabe de puertas en los casos en que la única puerta de acceso a la vivienda tenga trabada a la cerradura y no sea posible el ingreso o egreso de la misma. Para acceder a esta prestación el beneficiario deberá acreditar su vinculación con el domicilio. 3 Eventos Anuales - Tope por Evento $ 29.250' },
                    { name: 'ELECTRICIDAD', desc: 'Restablecimiento total o parcial del suministro eléctrico en casos de cortocircuitos que se produjeran dentro de la red domiciliaria. 3 Eventos Anuales - Tope por Evento $ 29.250' },
                    { name: 'GAS', desc: 'Reparación de perdidas de gas en artefactos sanitarios, cocinas, calefactores, o cualquier electrodomésticos conectado a las cañerías. 3 Eventos Anuales - Tope por Evento $ 29.250' },
                    { name: 'PERSONAL DE LIMPIEZA', desc: 'Si posee. Se brindará a consecuencia de un siniestro cubierto por la póliza. Tope $ 29.250 un solo evento por año.' },
                    { name: 'MUDANZA', desc: 'Se ofrecerá el servicio de traslado, no sólo como consecuencia de un siniestro, sino también, en el caso de que el asegurado quiera realizar una mudanza. Los muebles deberán ser trasladados al lugar especificado por el beneficiario. El beneficiario podrá solicitar este servicio cuando lo desee. El servicio está limitado a un tope máximo de $ 29.250- y comprende un único evento al año. Este servicio será prestado exclusivamente en la modalidad de reembolso.' },
                    { name: 'ENVÍO DE PROFESIONALES', desc: 'Si posee. Se informará teléfono, dirección y nombre de profesionales que puedan solucionar problemas en la vivienda del asegurado.' },
                    { name: 'HOSPEDAJE', desc: 'Si a consecuencia de un Siniestro, la vivienda alcanzada por el servicio Quedara Inhabitable, el prestador asumirá los gastos de hasta dos (2) días de hotel, para no más de cinco (5) personas que se domicilie en en la misma. El hotel deberá encontrarse lo más cercano posible a la residencia asegurada y a no más de 50 km de la misma. Los gastos de traslado al hotel y el respectivo retorno, estarán a cargo del beneficiario. Topes $ 29.250 por día y por beneficiario.' },
                    { name: 'MASCOTAS', desc: 'En caso de fallecimiento de la mascota perteneciente al propietario de la vivienda asegurada, el Prestador sufragará los gastos de cremación o colocación bajo parcela durante un año a cargo del asegurado. Por cuestiones sanitarias y de lealtad comercial las prestadoras de este servicio no trabajan con intermediarios. Una vez que la mascota fallezca deberá contactarse con nosotros para que se deje registro y deberá contratarlo por su cuenta y enviar la factura fiscal válida para obtener reintegro. Tope $ 29.250.' },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 font-medium text-gray-700 border-b border-gray-200 align-top">{row.name}</td>
                      <td className="p-3 text-gray-600 border-b border-gray-200 text-xs leading-relaxed">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4">
              <h3 className="font-bold text-red-700 mb-2">EXCLUSIONES DEL SERVICIO</h3>
              <ul className="space-y-1 text-sm text-red-700">
                <li className="flex gap-2"><span className="font-bold">•</span> Instalaciones y/o reparación de cualquier tipo de artefacto.</li>
                <li className="flex gap-2"><span className="font-bold">•</span> Todo tipo de materiales, salvo los que sean indispensables para el desempeño de la reparación.</li>
                <li className="flex gap-2"><span className="font-bold">•</span> Servicios contratados directamente por el beneficiario, aún en casos de emergencia.</li>
                <li className="flex gap-2"><span className="font-bold">•</span> Viviendas que aún no cumplan normas habitacionales y/o edilicias vigentes.</li>
                <li className="flex gap-2"><span className="font-bold">•</span> Eventos provocados por empresas proveedoras de servicios.</li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Verificación Técnica Vehicular</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>Recuerde que la <strong>Verificación Técnica Vehicular</strong> ya es obligatoria en la Ciudad Autónoma de Buenos Aires a partir del Octubre de 2016.</p>
              <p>La misma está destinada a aquellos vehículos particulares radicados en C.A.B.A. con mas de 3 años de antigüedad o mas de 60mil km, de hasta 3.500 kilos y motovehículos particulares con 1 año de antigüedad. Es un trámite sencillo que dura aproximadamente 20 minutos y no es necesario bajarse del auto.</p>
              <p>La única VTV válida es la realizada en las plantas habilitadas por el Gobierno de la Ciudad. Para obtenerla deberá solicitar un turno ingresando a <strong>Solicitá tu turno para la Verificación Técnica Vehicular</strong> (<em>/ tramites/turnos/vtv</em>) o llamando al <strong>147</strong></p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-amber-800 font-semibold">NO LO OLVIDE!! el nro. final de la patente indica el mes en el que debe realizarla</div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Gravado de Autopartes de Vehículos Automotores</h2>
            <div className="bg-gray-50 rounded-xl p-6 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>Para dar cumplimiento con lo dispuesto por la <strong>Ley 3.708</strong>, todo el parque automotor radicado en C.A.B.A., está obligado a grabar sus autopartes</p>
              <p>Los 0km tienen 30 días desde su patentamiento para cumplir con el grabado y no estar en infracción. Por otra parte según lo dispuesto por la <strong>Ley 14.497</strong> todo vehículo registrado en el ámbito de la Prov. de Bs. As. ante el registro nacional de la propiedad del automotor, debe realizar el grabado indeleble del número de dominio en puertas, capot y baúl. Deberán cumplir con la obligación:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Vehículos nuevos o usados patentados y/o radicados en la Provincia de Bs. As.</li>
                <li>Los autos usados deberán concurrir según el cronograma estipulado por la Ley.</li>
              </ul>
              <p>Para realizar el trámite deberá solicitar turno en RPVA o llame al <strong>0800-444-0018</strong>.</p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 font-semibold">Tenga en cuenta que el incumplimiento a dicha norma será multado por la autoridad correspondiente.</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default InformacionUtil
