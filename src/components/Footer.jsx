import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{ backgroundColor: "#17375e" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div>
          <h4 className="text-base font-semibold text-white mb-3 text-center">
            Contáctenos
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-white/90 rounded-lg p-3 hover:bg-white transition text-center shadow-sm">
              <svg
                className="w-4 h-4 text-accent mx-auto mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p className="text-xs font-medium text-[#17375e]">Sede Central</p>
              <p className="text-[10px] text-slate-600 leading-tight">
                Defensa 453, San Telmo
              </p>
            </div>
            <a
              href="tel:43428721"
              className="bg-white/90 rounded-lg p-3 hover:bg-white transition block text-center shadow-sm"
            >
              <svg
                className="w-4 h-4 text-accent mx-auto mb-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p className="text-xs font-medium text-[#17375e]">Teléfono</p>
              <p className="text-[10px] text-slate-600">4342-8721</p>
            </a>
            <a
              href="https://www.instagram.com/cooperativadeseguroslyf/"
              target="_blank"
              rel="noreferrer"
              className="bg-white/90 rounded-lg p-3 hover:bg-white transition block text-center shadow-sm"
            >
              <svg
                className="w-4 h-4 text-[#17375e] mx-auto mb-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              <p className="text-xs font-medium text-[#17375e]">Instagram</p>
              <p className="text-[10px] text-slate-600 truncate">
                @cooperativadeseguroslyf
              </p>
            </a>
            <a
              href="https://wa.me/+5491160005110"
              target="_blank"
              rel="noreferrer"
              className="bg-white/90 rounded-lg p-3 hover:bg-white transition block text-center shadow-sm"
            >
              <svg
                className="w-4 h-4 text-[#17375e] mx-auto mb-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <p className="text-xs font-medium text-[#17375e]">WhatsApp</p>
              <p className="text-[10px] text-slate-600">(011) 6000-5110</p>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white/10 to-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <p className="text-base text-slate-200 leading-relaxed">
           La entidad aseguradora dispone de un Servicio de Atención al Asegurado que atenderá las consultas y reclamos que presenten los tomadores de seguros, asegurados, beneficiarios y/o derechohabientes.
          </p>

          <div className="mt-4 pt-4 border-t border-white/10">
            <h4 className="text-base font-semibold text-white">
              Servicio de Atención al Asegurado
            </h4>
            <p className="mt-2 text-base text-slate-200">
              Responsable: Rubén Daniel Fernandez
            </p>
            <p className="text-base text-slate-200">
              1° Suplente: Carolina Amalia Luna
            </p>
            <p className="text-base text-slate-200">
              Teléfono de contacto: 4342-8721 interno 117
            </p>
            <Link to="/contacto" className="mt-3 inline-block text-xs font-semibold text-white bg-accent hover:bg-[#4A7AB8] px-4 py-1.5 rounded-full transition-colors">Contacto</Link>
          </div>

          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-base text-slate-200 leading-relaxed">
              En caso de reclamo ante la entidad aseguradora no resuelto o desestimado, podrá denunciarlo a través de <a href="https://www.argentina.gob.ar/ssn" target="_blank" rel="noreferrer" className="font-semibold text-gray-100 underline decoration-gray-100/60 underline-offset-2 hover:decoration-gray-100">www.argentina.gob.ar/ssn</a>
            </p>
          </div>

          <div className="mt-6 bg-gradient-to-b from-[#f7f7f7] to-[#efefef] rounded-xl px-6 sm:px-10 py-2">
            <div className="flex items-center justify-between gap-2 sm:gap-4 flex-col md:flex-row">
              <div className="flex-1 text-center text-[#222]">
                <p className="text-[11px] sm:text-xs font-normal leading-relaxed">
                  Entidad autorizada por la Superintendencia de Seguros de la
                  Nación.
                </p>
                <p className="text-[10px] sm:text-[11px] mt-0.5">
                  Registro Nº 388 -
                </p>
              </div>

              <div className="w-4/5 h-px md:w-px md:h-10 bg-[#111]"></div>

              <div className="flex-1 text-center text-[#222]">
                <p className="text-[11px] sm:text-xs font-normal leading-relaxed">
                  Organismo de control
                </p>
                <p className="text-[10px] sm:text-[11px] mt-0.5">
                  www.argentina.gob.ar/ssn
                </p>
              </div>

              <div className="w-4/5 h-px md:w-px md:h-10 bg-[#111]"></div>

              <div className="flex-[1.2] text-center">
                <img
                  src="/logo_ssn.png"
                  alt="SSN"
                  className="max-w-full h-auto mx-auto brightness-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-center text-sm text-slate-400">
        <p>&copy; 2026 - Cooperativa de Seguros Luz y Fuerza Limitada</p>
        <p>Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
export default Footer;
