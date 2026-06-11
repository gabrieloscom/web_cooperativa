import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import {
  Description as DescriptionIcon,
  VerifiedUser as VerifiedUserIcon,
  Build as BuildIcon,
  Home as MuiHomeIcon,
  DirectionsCar as DirectionsCarIcon,
  Business as BusinessIcon,
  Storefront as StorefrontIcon,
  Handshake as HandshakeIcon,
  LocalShipping as LocalShippingIcon,
  People as PeopleIcon,
  Church as ChurchIcon,
  Article as ArticleIcon,
} from '@mui/icons-material'

const empresas = [
  { title: 'Consorcios', icon: 'building' },
  { title: 'Comercio', icon: 'shop' },
  { title: 'Flota Autos', icon: 'truck' },
  { title: 'Resp. Civil', icon: 'handshake' },
  { title: 'Transporte', icon: 'shipping' },
  { title: 'Vida Colectivo', icon: 'users' },
]

function EmpresaIcon({ type }) {
  switch (type) {
    case 'building':
      return <BusinessIcon className="text-accent" fontSize="small" />
    case 'shop':
      return <StorefrontIcon className="text-accent" fontSize="small" />
    case 'truck':
      return <DirectionsCarIcon className="text-accent" fontSize="small" />
    case 'handshake':
      return <HandshakeIcon className="text-accent" fontSize="small" />
    case 'shipping':
      return <LocalShippingIcon className="text-accent" fontSize="small" />
    case 'users':
      return <PeopleIcon className="text-accent" fontSize="small" />
    default:
      return null
  }
}

function Home() {
  return (
    <>
      <HeroSlider />

      {/* Services */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary">Nuestros Servicios</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Más de 50 años protegiendo a nuestros asegurados con soluciones integrales</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center"><DescriptionIcon className="text-accent" fontSize="large" /></div>
              <h3 className="font-bold text-primary mt-3 mb-2">Cotizador Online</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">Si Usted es asegurado de la Cooperativa consulte con nuestro dpto. comercial al 4342-8721 o por whatsapp al (011)6000-5110 por otros seguros y obtendrá importantes descuentos.</p>
              <a href="http://tarifador.segurosluzyfuerza.com.ar/publico/Tarifador_Online.aspx" target="_blank" rel="noreferrer" className="inline-block text-xs font-semibold text-white bg-accent hover:bg-[#4A7AB8] px-4 py-1.5 rounded-full transition-colors mt-auto">Cotizar</a>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center"><VerifiedUserIcon className="text-accent" fontSize="large" /></div>
              <h3 className="font-bold text-primary mt-3 mb-2">En caso de siniestro</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">En caso de siniestro con alguno de nuestros asegurados descargue el formulario, el cual tiene todos los datos necesarios para informar un siniestro.</p>
              <Link to="/siniestros/automotor-terceros" className="inline-block text-xs font-semibold text-white bg-accent hover:bg-[#4A7AB8] px-4 py-1.5 rounded-full transition-colors mt-auto">Descargar</Link>
            </div>
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center"><BuildIcon className="text-accent" fontSize="large" /></div>
              <h3 className="font-bold text-primary mt-3 mb-2">Auxilio mecánico al instante</h3>
              <div className="text-gray-600 text-xs space-y-0.5 mb-4">
                <p><strong>APP Tu Asistencia </strong><a target="_blank" rel="noreferrer" href="https://tuasistencia.redsos.com.ar/home/login" className="text-accent hover:underline">(Ingrese aqui)</a></p>
                <p><strong>0800-333-2753</strong></p>
                <p><strong>SMS al 70703</strong> SOS Dominio</p>
                <p><strong>WhatsApp:</strong> <a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=5491128080012" className="text-accent hover:underline">(011) 2808-0012</a></p>
              </div>
              <Link to="/auxilio-mecanico" className="inline-block text-xs font-semibold text-white bg-accent hover:bg-[#4A7AB8] px-4 py-1.5 rounded-full transition-colors mt-auto">Ver más</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Banners */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="/pdf/cocherias.pdf" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-gradient-to-br from-primary to-primary-light rounded-xl p-5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="min-w-12 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <ChurchIcon className="text-white" fontSize="medium" />
            </div>
            <div className="min-w-0 flex-1 flex flex-col gap-2">
              <h3 className="text-white font-bold text-sm sm:text-base">Listado de Cocherías</h3>
              <p className="text-white/70 text-[11px] sm:text-xs leading-tight">En caso de siniestro comunicarse con el 4342-8721 Int3 <a href="https://api.whatsapp.com/send?phone=5491160005110" target="_blank" rel="noreferrer" className="inline-flex items-center gap-0.5 text-green-300 hover:text-green-200 transition-colors"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>11-6000-5110</a> de lunes a viernes de 10 a 18 hs</p>
              <span className="self-center text-[11px] font-semibold text-white bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors">Descargar PDF</span>
            </div>
          </a>
          <a href="http://tarifador.segurosluzyfuerza.com.ar" target="_blank" rel="noreferrer" className="flex items-center gap-4 bg-gradient-to-br from-accent to-[#4A7AB8] rounded-xl p-5 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
            <div className="min-w-12 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <ArticleIcon className="text-white" fontSize="medium" />
            </div>
            <div className="min-w-0 flex-1 flex flex-col gap-2">
              <h3 className="text-white font-bold text-sm sm:text-base">Denuncia de Siniestros</h3>
              <p className="text-white/70 text-[11px] sm:text-xs leading-tight">Nuevo sistema Online para la gestion de denuncias</p>
              <span className="self-center text-[11px] font-semibold text-white bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors">Hacer denuncia</span>
            </div>
          </a>
        </div>
      </section>

      {/* Insurance Products */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary">Nuestros Seguros</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Protegemos lo que más importa para vos y tu familia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/seguros/hogar" className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center"><MuiHomeIcon className="text-accent" fontSize="large" /></div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Seguro del Hogar</h3>
                <p className="text-gray-600 text-sm">Protegé tu hogar con nuestras coberturas integrales.</p>
              </div>
              <span className="text-accent font-semibold text-sm hover:text-primary transition-colors">Ver más →</span>
            </Link>
            <Link to="/seguros/automotor" className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8 flex flex-col items-center text-center gap-4">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center"><DirectionsCarIcon className="text-accent" fontSize="large" /></div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-1">Seguro de Automóviles</h3>
                <p className="text-gray-600 text-sm">Cobertura completa para tu vehículo con los mejores beneficios.</p>
              </div>
              <span className="text-accent font-semibold text-sm hover:text-primary transition-colors">Ver más →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Empresas */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary">Seguros para Empresas</h2>
            <p className="text-gray-500 mt-2 max-w-2xl mx-auto">Soluciones corporativas diseñadas para tu negocio</p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
            {empresas.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-sm transition-shadow">
                <EmpresaIcon type={item.icon} />
                <p className="text-[11px] font-semibold text-primary text-center leading-tight">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default Home
