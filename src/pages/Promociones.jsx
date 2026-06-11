function Promociones() {
  const hotels = [
    { src: '/images/Hotel-Cordoba.jpg', name: 'Cordoba - Villa Giardino', desc: 'Hotel "Por los derechos del trabajador"' },
    { src: '/images/Hotel-RioHondo.jpg', name: 'Rio Hondo', desc: 'Hotel "Platino"' },
    { src: '/images/Hotel-Mendoza.jpg', name: 'Mendoza', desc: 'Hotel "1° de Mayo"' },
    { src: '/images/Hotel-Bariloche.jpg', name: 'San Carlos de Bariloche', desc: 'Hotel "Alum Nehuen"' },
    { src: '/images/Hotel-SanBernardo.jpg', name: 'San Bernardo', desc: 'Hotel "Por la liberacion Nacional"' },
    { src: '/images/Hotel-Salta.jpg', name: 'Salta', desc: 'Hotel "Victoria Plaza"' },
    { src: '/images/Hotel-MarDelPlata.jpg', name: 'Mar del Plata (Centro)', desc: 'Hotel "Por la Justicia Social"' },
    { src: '/images/Hotel-Misiones.jpg', name: 'Misiones', desc: 'Hotel "Libertador"' },
    { src: '/images/Hotel-MarDelPlataLescano.jpg', name: 'Mar del Plata (Punta Mogotes)', desc: 'Hotel "Oscar Lescano"' },
  ]

  return (
    <>
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src="/images/MarDelPlata.jpg" alt="Turismo" className="w-full md:w-80 rounded-xl shadow-lg" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contratando nuestro seguro</h1>
              <p className="text-gray-200 text-lg">Forme parte de nuestra red de turismo. En caso de que Usted no sea afiliado al Sindicato de Luz y Fuerza y tenga un seguro vigente en nuestra Cooperativa, podrá acceder a la amplia gama de variantes que ofrece Luz y Fuerza en materia de Turismo a costos muy favorables.</p>
              <p className="text-gray-300 mt-4">Para mas información dirigirse al Sindicato, Agencia de Viajes sita en Defensa 453. C.A.B.A</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Hoteles</h2>
            <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div key={hotel.name} className="card group">
                <div className="overflow-hidden">
                  <img src={hotel.src} alt={hotel.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-primary">{hotel.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{hotel.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Promociones
