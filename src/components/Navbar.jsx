import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Nosotros', path: '/nosotros' },
  {
    label: 'Personas',
    children: [
      { label: 'Seguro Automotor', path: '/seguros/automotor' },
      { label: 'Seguro Hogar', path: '/seguros/hogar' },
      { label: 'Formas de Pago', path: '/formas-de-pago' },
    ],
  },
  {
    label: 'Siniestros',
    children: [
      { label: 'Automotor asegurados', path: '/siniestros/automotor-asegurados' },
      { label: 'Automotor terceros', path: '/siniestros/automotor-terceros' },
      { label: 'Hogar', path: '/siniestros/hogar' },
      { label: 'Vida y Sepelio', path: '/siniestros/vida' },
    ],
  },
  {
    label: 'Afiliados',
    children: [
      { label: 'Afiliado Activo', path: '/afiliados/activo' },
      { label: 'Afiliado Jubilado', path: '/afiliados/jubilado' },
    ],
  },
  { label: 'Promociones', path: '/promociones' },
  { label: 'RSE', path: '/rse' },
  { label: 'Informacion Util', path: '/informacion-util' },
  { label: 'Contacto', path: '/contacto' },
  {
    label: 'Productores',
    external: true,
    children: [
      { label: 'Productores Registrados', href: 'http://tarifador.segurosluzyfuerza.com.ar/' },
      { label: 'Productores no Registrados', href: 'https://tarifador.segurosluzyfuerza.com.ar/publico/Tarifador_Online.aspx?ZonaRie=15' },
    ],
  },
  { label: 'Copia Poliza', path: 'http://tarifador.segurosluzyfuerza.com.ar/', external: true },
]

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(null)
  }, [location])

  useEffect(() => {
    if (!openDropdown) return
    const handleClick = () => setOpenDropdown(null)
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [openDropdown])

  const isActive = (path) => path && location.pathname === path
  const isChildActive = (children) => children?.some(c => location.pathname === c.path)

  const renderNavLink = (item) => {
    if (item.external && !item.children) {
      return (
        <a key={item.label} href={item.path} target="_blank" rel="noreferrer"
          className="block px-2 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors whitespace-nowrap">
          {item.label}
        </a>
      )
    }
    if (!item.children) {
      return (
        <Link key={item.path} to={item.path}
          className={`block px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap ${isActive(item.path) ? 'text-white font-bold' : 'text-white/90 hover:text-white'}`}>
          {item.label}
        </Link>
      )
    }
    const isOpen = openDropdown === item.label
    return (
      <div key={item.label} className="relative">
        <button onClick={(e) => { e.stopPropagation(); setOpenDropdown(isOpen ? null : item.label) }} className={`flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap ${isChildActive(item.children) ? 'text-white font-bold' : 'text-white/90 hover:text-white'}`}>
          {item.label}
          <svg className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <div onClick={(e) => e.stopPropagation()} className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
            {item.children.map((child) => {
              if (child.href) {
                return <a key={child.label} href={child.href} target="_blank" rel="noreferrer"
                  className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-accent/10 hover:text-primary transition-colors">{child.label}</a>
              }
              return (
                <Link key={child.path} to={child.path}
                  className={`block px-4 py-2.5 text-sm transition-colors ${isActive(child.path) ? 'text-primary font-semibold bg-accent/10' : 'text-gray-700 hover:bg-accent/10 hover:text-primary'}`}>
                  {child.label}
                </Link>
              )
            })}
          </div>
        )}
      </div>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 bg-white rounded-lg p-1">
            <img src="/images/logo_cooperativa1.png" alt="Cooperativa Luz y Fuerza" className="h-10 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map(renderNavLink)}
          </div>

          <div className="flex items-center gap-3">
            <a href="tel:43428721" className="hidden sm:flex flex-col items-center text-sm text-white/90 hover:text-white transition-colors leading-tight">
              <span className="text-[10px] text-white/60">Contáctese</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                4342-8721
              </span>
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2 -mr-2" aria-label="Menú">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-primary-light border-t border-white/10">
          <div className="px-2 py-3 space-y-1 max-h-96 overflow-y-auto">
            <a href="tel:43428721" className="flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-white/10 rounded-lg sm:hidden">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              4342-8721
            </a>
            {menuItems.map((item) => {
              if (item.external && !item.children) {
                return <a key={item.label} href={item.path} target="_blank" rel="noreferrer"
                  className="block px-3 py-2 text-sm text-white hover:bg-white/10 rounded-lg">{item.label}</a>
              }
              if (!item.children) {
                return (
                  <Link key={item.path} to={item.path}
                    className={`block px-3 py-2 text-sm rounded-lg ${isActive(item.path) ? 'bg-white/20 text-white' : 'text-white hover:bg-white/10'}`}>
                    {item.label}
                  </Link>
                )
              }
              return (
                <div key={item.label}>
                  <div className="px-3 py-2 text-sm font-semibold text-gray-300 uppercase tracking-wider">{item.label}</div>
                  <div className="ml-4 space-y-1">
                    {item.children.map((child) => {
                      if (child.href) {
                        return <a key={child.label} href={child.href} target="_blank" rel="noreferrer"
                          className="block px-3 py-1.5 text-sm text-white/80 hover:bg-white/10 rounded-lg">{child.label}</a>
                      }
                      return (
                        <Link key={child.path} to={child.path}
                          className={`block px-3 py-1.5 text-sm rounded-lg ${isActive(child.path) ? 'bg-white/20 text-white' : 'text-white/80 hover:bg-white/10'}`}>
                          {child.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
export default Navbar
