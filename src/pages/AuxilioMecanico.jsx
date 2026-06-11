function AuxilioMecanico() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Auxilio Mecánico</h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <img src="/images/SOS-Info.jpg" alt="Auxilio Mecánico" className="w-full rounded-xl shadow-md" />
          <div className="space-y-4 text-sm text-gray-600">
            <h4 className="text-lg font-bold text-primary">Alcances del servicio sin cargo</h4>
            <ul className="space-y-3">
              <li className="flex gap-2"><span className="text-accent font-bold mt-1">•</span><span><b>Beneficiario:</b> Vehículo de uso particular hasta 3.500 Kgrs</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold mt-1">•</span><span><b>Area de Cobertura:</b> República Argentina y países limítrofes</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold mt-1">•</span><span><b>Mecánica Ligera:</b> Traslado al taller más cercano hasta 500 Kms. Límite de 1 servicio por mes, 12 al año.</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold mt-1">•</span><span><b>Depósito o custodia:</b> Tope máximo de $ 200 y un máximo de 3 días</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold mt-1">•</span><span><b>Servicio de conductor:</b> En caso de enfermedad, accidente o fallecimiento</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold mt-1">•</span><span><b>Estancia:</b> Hotel a razón de $ 700 por beneficiario y día, tope 3 días</span></li>
              <li className="flex gap-2"><span className="text-accent font-bold mt-1">•</span><span><b>Servicio de comunicación gratuita:</b> 0-800-444-0314</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AuxilioMecanico
