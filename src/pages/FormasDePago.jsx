function FormasDePago() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Formas de Pago</h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-primary mb-4">Sistemas de pago habilitados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {['Pago Fácil', 'Pagomiscuentas', 'Cajeros Banelco', 'HomeBanking', 'Visa y Mastercard', 'Rapipago', 'CBU', 'MercadoPago'].map((metodo) => (
              <div key={metodo} className="flex items-center gap-2 bg-white rounded-lg p-3 shadow-sm">
                <span className="text-green-600 font-bold">✓</span>
                <span className="text-gray-700 text-sm font-medium">{metodo}</span>
              </div>
            ))}
          </div>
          <img src="/images/MediosDePago.png" alt="Medios de Pago" className="w-full mt-6 rounded-lg" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-primary mb-6">¿Cómo pagar a través de PagoMisCuentas?</h2>
          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                Internet
              </h3>
              <ol className="space-y-3 text-gray-600 text-sm ml-12 list-decimal">
                <li>Ingresá en pagomiscuentas.com, o desde el Home Banking de tu Banco, seleccioná la opción <strong>Pago de Servicios</strong></li>
                <li>Elegí el <strong>Rubro: SEGUROS</strong> y la <strong>Empresa: Seg Luz y Fuerza CABA</strong>, e ingresá la <strong>identificación de Cliente: N° de Asegurado</strong></li>
                <li>Podrás imprimir o consultar el comprobante cuando lo necesites</li>
              </ol>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                Cajeros automáticos
              </h3>
              <ol className="space-y-3 text-gray-600 text-sm ml-12 list-decimal">
                <li>Ingresá tu clave y elegí la opción <strong>"PAGO MIS CUENTAS"</strong></li>
                <li>Elegí <strong>Rubro: SEGUROS</strong> y <strong>Empresa: SEGUROS LYF</strong>, e ingresá la identificación de Cliente</li>
                <li>El cajero imprimirá el comprobante</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FormasDePago
