function ReclamoTercero() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary">Reclamo de Terceros</h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-6">
          <p className="text-gray-600 mb-4">Si usted fue embestido por un vehículo asegurado en Cooperativa de Seguros Luz y Fuerza Ltda., obtenga en esta página el formulario de denuncia o solicítelo en nuestras oficinas.</p>
          <ul className="space-y-2 text-gray-600 text-sm mb-4">
            <li className="flex gap-2"><span className="text-accent font-bold">1.</span> Complete el formulario con todos los datos solicitados</li>
            <li className="flex gap-2"><span className="text-accent font-bold">2.</span> Firme el formulario impreso o suministrado</li>
            <li className="flex gap-2"><span className="text-accent font-bold">3.</span> Adjunte al mismo la documentación que se detalla a continuación:</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-6">
          <h2 className="text-lg font-bold text-primary mb-4">Documentación requerida</h2>
          <ol className="space-y-4 text-sm text-gray-600 list-decimal ml-5 leading-relaxed">
            <li><strong>ACTUACION POLICIAL</strong> (ACTA, DENUNCIA O EXPOSICION CIVIL, SI LA HUBIERE)</li>
            <li><strong>DOS PRESUPUESTOS DE REPARACION</strong>, en ellos <b>DEBERA ESTAR BIEN ACLARADO</b>, el valor por mano de obra de chapa, el valor por mano de obra pintura y el valor de cada uno de los repuestos que se deban reemplazar (individualizando c/u)</li>
            <li><strong>ORIGINAL Y FOTOCOPIA LEGIBLE</strong> de frente de póliza y último recibo de pago. En el caso de no poseer seguro al momento del accidente, deberá presentar una declaración jurada dejando constancia de tal situación.</li>
            <li><strong>CINCO FOTOGRAFIAS</strong> de las partes afectadas de su vehículo. Es imprescindible presentar una donde se pueda apreciar el número de patente.</li>
            <li><strong>FOTOCOPIA LEGIBLE</strong> del registro del conductor (ambas caras) y original</li>
            <li><strong>FOTOCOPIA LEGIBLE</strong> de la cédula de identificación del automotor y original</li>
            <li><strong>FOTOCOPIA LEGIBLE</strong> del documento de identidad del titular y original</li>
            <li><strong>FOTOCOPIA LEGIBLE</strong> del DNI del conductor y original</li>
            <li>En caso de no estar realizada aún la transferencia, deberá presentar <strong>08 y boleto de compraventa</strong> original y fotocopia legible, con firma certificadas por escribano.</li>
            <li>Para reclamación por lesiones, fotocopia legible y original del DNI del lesionado y de las constancias de atención médica (recetas, radiografías, etc.) originales y datos de actuación hospitalaria, policial y judicial.</li>
            <li><strong>FOTOCOPIA LEGIBLE</strong> de la denuncia administrativa de su seguro</li>
            <li><strong>CERTIFICADO DE COBERTURA</strong></li>
          </ol>
        </div>
        <div className="text-center">
          <a href="/pdf/reclamo-form.html" target="_blank" rel="noreferrer" className="btn-primary">Descargar formulario</a>
        </div>
      </div>
    </section>
  )
}
export default ReclamoTercero
