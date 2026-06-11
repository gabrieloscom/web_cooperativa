function ReclamoAutomotor() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Siniestro Automotor</h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 text-sm text-amber-800">
          <strong>Importante:</strong> El plazo para realizar la denuncia es de 72 hs. de ocurrido el hecho.
        </div>
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-lg font-bold text-primary mb-4">Documentación necesaria</h2>
          <p className="text-gray-600 text-sm mb-4">Efectuar la Denuncia en Defensa 453 C.A.B.A. presentando:</p>
          <ul className="space-y-2 text-gray-600 text-sm">
            {['Cédula de identificación del vehículo', 'Licencia de conducir', 'DNI', 'Fotografías del vehículo (daños y patente)', 'Denuncia Policial (solo para robo o incendio)'].map((item, i) => (
              <li key={i} className="flex gap-2"><span className="text-accent font-bold">•</span><span>{item}</span></li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 md:p-8">
          <h2 className="text-lg font-bold text-primary mb-4">Datos a solicitar al tercero</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
            {['Nombre y apellido', 'DNI', 'Licencia de Conducir', 'Domicilio', 'Número telefónico', 'Marca, modelo, patente, año', 'Compañía Aseguradora', 'Número de póliza'].map((item, i) => (
              <div key={i} className="flex gap-2"><span className="text-accent font-bold">•</span><span>{item}</span></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default ReclamoAutomotor
