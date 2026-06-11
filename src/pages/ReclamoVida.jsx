function ReclamoVida() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Siniestro Vida</h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8 text-sm text-blue-800">
          <strong>Contacto:</strong> 4342-8721 Interno 3 | Fax Interno 8 | Lun a Vie 10 a 18 hs
        </div>
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-lg font-bold text-primary mb-4">Requisitos para seguro de Vida</h2>
          <p className="text-gray-600 text-sm mb-4">En caso de fallecimiento, presentar la siguiente documentación:</p>
          <ul className="space-y-3 text-gray-600 text-sm">
            {['Partida de Defunción (Original y fotocopia)', 'Solicitud Individual del Seguro Colectivo de Vida', 'Carnets de Servicios Sociales', 'Carnets de Afiliación al Sindicato', 'Fotocopia del último recibo de sueldo (activos)', 'Fotocopia del haber jubilatorio (jubilados)', 'Fotocopia del DNI de los beneficiarios'].map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-accent font-bold">•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <div className="text-center">
          <a href="/pdf/cocherias.pdf" target="_blank" rel="noreferrer" className="btn-primary">Descargar listado de cocherías</a>
        </div>
      </div>
    </section>
  )
}
export default ReclamoVida
