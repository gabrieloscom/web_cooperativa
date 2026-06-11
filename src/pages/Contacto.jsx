import { useState } from 'react'

function Contacto() {
  const [sector, setSector] = useState('AtencionAsegurado')
  const showExtra = sector === 'AtencionAsegurado'

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    fetch('/contacto.php', { method: 'POST', body: formData })
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="section-title">Contáctese con nosotros</h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">Sector</label>
                <select name="sector" id="sector" value={sector} onChange={(e) => setSector(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition">
                  <option value="AtencionAsegurado">Atencion al Asegurado</option>
                  <option value="comercial@luzyfuerzaseguros.com.ar">Comercial</option>
                  <option value="cobranzas@luzyfuerzaseguros.com.ar">Cobranzas</option>
                  <option value="siniestros@luzyfuerzaseguros.com.ar">Siniestros</option>
                </select>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                <input type="text" name="name" id="name" required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" />
              </div>
              {showExtra && (
                <div className="space-y-5 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <h3 className="text-sm font-semibold text-primary">Datos del asegurado</h3>
                  {['apellido', 'telefono', 'domicilio', 'dni'].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field === 'dni' ? 'Documento de Identidad' : field}</label>
                      <input type="text" name={field} id={field} required={field !== 'domicilio'}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" />
                    </div>
                  ))}
                </div>
              )}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-Mail</label>
                <input type="email" name="email" id="email" required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition" />
              </div>
              <div>
                <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">Comentario</label>
                <textarea name="comment" id="comment" rows={6} required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-accent focus:border-accent outline-none transition resize-y"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-center">Enviar consulta</button>
            </form>
          </div>
          <div>
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h2 className="text-lg font-bold text-primary mb-4">Información de contacto</h2>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <div><p className="font-medium text-gray-800">Defensa 453</p><p>San Telmo, CABA</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <div><p className="font-medium text-gray-800">4342-8721</p><p>Lun a Vie 10 a 18 hs</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 2.096.547 4.142 1.588 5.945L2 24l6.305-1.654A11.882 11.882 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
                  <div><a href="https://wa.me/+5491160005110" target="_blank" rel="noreferrer" className="font-medium text-gray-800 hover:text-accent">(011) 6000-5110</a><p className="text-gray-500">WhatsApp</p></div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.642423400134!2d-58.37419468420115!3d-34.61320246550829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccad5342fccb9%3A0xd0f8720f63f3117c!2sDefensa+453%2C+C1065AAG+CABA!5e0!3m2!1ses-419!2sar!4v1453404648730" width="100%" height="300" style={{border:'0'}} allowFullScreen loading="lazy" title="Ubicación" className="w-full"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contacto
