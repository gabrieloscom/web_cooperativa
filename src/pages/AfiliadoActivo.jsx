function AfiliadoActivo() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-primary">A los Compañeros Activos, Seguro Colectivo de Vida</h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="space-y-5 text-gray-600 leading-relaxed">
          <p>Les informamos en esta oportunidad que, para el efectivo funcionamiento de la <strong>Póliza Colectiva de Vida</strong>, es indispensable, que ante el fallecimiento del Asegurado Titular, sus familiares presenten la <strong>"Solicitud Individual de Seguro Colectivo de Vida"</strong> para el cobro; en la cual se detalla: Nombre, Apellido y DNI del o los beneficiarios que Ud. hubiera designado; a efectos de evitar ante la ausencia de la misma, la presentación de la Declaratoria de Herederos, la cual sólo es obtenida mediante el inicio de un juicio sucesorio a costa de los interesados.</p>
          <p>Por esto es que, le solicitamos, en caso que la mencionada Solicitud no obre en su poder, se presente indefectiblemente en esta Cooperativa a confeccionarla a la brevedad.</p>
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-primary mb-3">Recuerde que necesitará traer:</h3>
            <ul className="space-y-2">
              {['Recibo de Haberes', 'Carnet de Afiliado al Sindicato', 'Apellido, Nombre y DNI del o los Beneficiarios'].map((item, i) => (
                <li key={i} className="flex gap-2"><span className="text-accent font-bold">•</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <p>Puede hacer cualquier consulta que considere, comunicándose a nuestro teléfono: <strong>4342-8721</strong> (líneas rotativas), internos <strong>134, 124, 123, 122</strong>; de 10 a 18 Hs., como siempre estamos a su disposición.</p>
          <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl">
            <p className="text-primary font-semibold">Los trabajadores <u>ACTIVOS</u>, tienen el <strong>beneficio</strong> de abonar sus Seguros por <strong><u>Retención mensual de Haberes.</u></strong></p>
            <p className="text-gray-600 text-sm mt-2">Para adherir a esta alternativa de pago, contáctese con nuestra Cooperativa.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AfiliadoActivo
