function SeguroAutomotor() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Seguro Automotor</h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <img src="/images/Banner_SeguroAutomotor1.jpg" alt="Seguro Automotor" className="w-full rounded-xl shadow-md mb-10" />
        <div className="space-y-10">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary mb-2">Terceros Completo Premium: Unidades 2011 en adelante Nacionales e Importadas</h2>
            <p className="text-gray-600 mb-4">La cobertura exacta para tener su vehículo bien protegido no solo contra Robo total y Parcial, Incendio total y Parcial, Daños totales por accidente, Responsabilidad Civil; sino que además, vamos a cubrir los daños parciales que sufriera su unidad en caso de Robo total con aparición, hasta el 10% de la suma asegurada.</p>
            <h3 className="font-semibold text-primary mb-2">Y además, vamos a cubrirle como Adicional:</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Rotura de luneta y parabrisas <strong>sin límite</strong></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Rotura de vidrios laterales y cerraduras <strong>sin límite</strong></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Daños ocasionados por granizo hasta el 10% de la suma asegurada de la unidad</li>
            </ul>
          </div>

          <div className="bg-primary/5 rounded-xl p-6 md:p-8 border border-primary/10">
            <h2 className="text-xl font-bold text-primary mb-2">COBERTURA D4 0KM (Promoción)</h2>
            <p className="text-gray-600 mb-4">Asegure su 0km NACIONAL o IMPORTADO con Cobertura de <strong>TODO RIESGO</strong> (D0) c/franquicias y pague como si contratara una Cobertura <strong>PREMIUM</strong>. No dude en consultar esta Promoción válida para los 2 primeros años de su 0km. (solamente)</p>
            <p className="text-sm text-gray-500">*En caso de Robo total o Destrucción Total por Accidente el valor de reposición es el del 0km (durante el primer año de la unidad contado desde la fecha de factura de compra del mismo) y reposición a nuevo de neumáticos durante el primer año contado desde la fecha de factura de compra de la unidad.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-4">Beneficios Adicionales sin cargo para todas las coberturas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Extensión de cobertura a países limítrofes (Paraguay y Uruguay)',
                'Reconocimiento por reembolso de cobertura contratada en otros países (Brasil y Chile)',
                'Mecánica ligera y/o acarreo hasta 500 km lineales s/costo en toda la Rep. Argentina y países limítrofes',
                'Traslado de los ocupantes de la unidad averiada a partir de los 100 km del domicilio',
                'Estancia de los beneficiarios por inmovilización del vehículo a partir de los 100 km del domicilio particular con un máximo de 3 días de alojamiento',
                'Servicio de conductor en caso de enfermedad, accidente o fallecimiento del titular de la unidad',
                'Extracción del vehículo en caso de desbarrancamiento',
                'Depósito o custodia del vehículo reparado o recuperado con un tope máximo de 3 días',
                'Servicio de comunicación gratuita al 0800-333-2753',
                'SMS al 70703 – SOS Dominio',
                <span key="app"><a href="https://tuasistencia.redsos.com.ar/home/login" target="_blank" rel="noreferrer" className="text-accent hover:underline font-semibold">APP Tu Asistencia (Ingrese aqui)</a></span>,
              ].map((beneficio, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-accent font-bold mt-0.5">•</span>
                  <span>{beneficio}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary mb-2">Terceros Completo con Adicionales (C2): Unidades 2011 en adelante</h2>
            <p className="text-gray-600 mb-3">Cobertura básica de Terceros más:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Rotura de luneta y parabrisas <strong>sin límite</strong></li>
              <li className="flex gap-2"><span className="text-green-600 font-bold">✓</span> Rotura de vidrios laterales y cerraduras <strong>sin límite</strong></li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary mb-2">Todo Riesgo con Franquicia fija: Unidades Nacionales Cobertura a partir del 2015</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> Robo total y parcial</li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> Incendio total y parcial</li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> Resp. Civil hasta $ 208.000.000</li>
              <li className="flex gap-2"><span className="text-accent font-bold">•</span> Daños totales y parciales con franquicia fija de:
                <ul className="ml-6 mt-1 space-y-1">
                  <li className="flex gap-2"><span className="text-accent font-bold">-</span> Franquicia del 1% de la suma asegurada para unidades de hasta $ 10.000.000</li>
                  <li className="flex gap-2"><span className="text-accent font-bold">-</span> Franquicia del 2% de la suma asegurada para unidades desde $ 10.000.001 hasta de $ 20.000.000</li>
                  <li className="flex gap-2"><span className="text-accent font-bold">-</span> Franquicia del 3% de la suma asegurada para unidades de mas de $ 20.000.001</li>
                </ul>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
export default SeguroAutomotor
