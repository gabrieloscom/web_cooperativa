import { Link } from 'react-router-dom'

function SeguroHogar() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Seguro Hogar</h1>
          <div className="w-20 h-1 bg-accent mx-auto mt-4"></div>
        </div>
        <img src="/images/Banner_SeguroHogar1.jpg" alt="Seguro Hogar" className="w-full rounded-xl shadow-md mb-10" />
        <div className="space-y-10">
          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-primary mb-4">Combinado Familiar Tradicional</h2>
            <p className="text-gray-600 mb-4">Sentite seguro con el Combinado Familiar que te permite incluir en una misma póliza, todas las coberturas necesarias para tener tu hogar protegido contra todos los riesgos a los que se expone tu patrimonio familiar.</p>
            <h3 className="font-semibold text-primary mb-3">COBERTURA:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600">
              {[
                'Incendio edificio y mobiliario general por daños causados por acción directa o indirecta del fuego',
                'Robo mobiliario gral',
                'Robo y/o rotura de TV, Audio, Equipos de Computación, Tablet, Notebook, Playstation',
                'Cristales',
                'Responsabilidad Civil hechos privados',
                'Remoción de escombros',
                'Acc. Personales hasta 65 años',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span>{item}</span></div>
              ))}
            </div>
            <div className="mt-4 pl-5 border-l-2 border-accent/30">
              <p className="font-semibold text-primary text-sm mb-1">SOS HOGAR</p>
              <ul className="space-y-1 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-accent font-bold">•</span> Cerrajeria: 3 eventos por año; tope $ 29.250 cada evento</li>
                <li className="flex gap-2"><span className="text-accent font-bold">•</span> Plomeria: 3 eventos por año; tope $ 29.250 cada evento</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-primary mb-4">Combinado Familiar Plus - Planes Cerrados</h2>
            <p className="text-gray-600 mb-4">Con nuestros Planes Cerrados de Combinado Familiar protegés tu casa de manera integral e inmediata, sin inspección previa y con un simple llamado telefónico.</p>
            <h3 className="font-semibold text-primary mb-3">COBERTURA:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-600 mb-6">
              {[
                'Podrás elegir entre 5 Planes cerrados diferentes, el que más se adecúe a tus necesidades',
                'Incendio edificio y mobiliario general',
                'Robo mobiliario',
                'Robo y/o rotura de TV, Audio, Equipos de Computación, Tablet, Notebook, Playstation',
                'Cristales',
                'Responsabilidad Civil hechos privados',
                'Remoción de escombros',
                'Acc. Personales hasta 65 años',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2"><span className="text-green-600 font-bold">✓</span><span>{item}</span></div>
              ))}
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-3 text-left font-semibold">Coberturas</th>
                    <th className="p-3 text-center font-semibold">Plan A</th>
                    <th className="p-3 text-center font-semibold">Plan B</th>
                    <th className="p-3 text-center font-semibold">Plan C</th>
                    <th className="p-3 text-center font-semibold">Plan D</th>
                    <th className="p-3 text-center font-semibold">Plan E</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Incendio Edificio', values: ['$47.625.000', '$66.675.000', '$85.725.000', '$104.775.000', '$142.875.000'] },
                    { name: 'Incendio Contenido', values: ['$9.525.000', '$13.335.000', '$17.145.000', '$20.955.000', '$28.575.000'] },
                    { name: 'Robo Mobiliario', values: ['$2.300.000', '$3.200.000', '$4.100.000', '$4.900.000', '$6.700.000'] },
                    { name: 'Robo/Rotura Electrónicos *', values: ['$2.000.000', '$2.700.000', '$3.500.000', '$4.200.000', '$5.800.000'] },
                    { name: 'Cristales', values: ['$476.250', '$666.750', '$857.250', '$1.047.750', '$1.428.750'] },
                    { name: 'Resp. Civil hechos privados', values: ['$952.500', '$1.333.500', '$1.714.500', '$2.095.500', '$2.857.500'] },
                    { name: 'Remoción escombros', values: ['$476.250', '$666.750', '$857.250', '$1.047.750', '$1.428.750'] },
                    { name: 'Acc. Personales', values: ['$3.000.000', '$3.000.000', '$3.000.000', '$3.000.000', '$3.000.000'] },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-3 font-medium text-gray-700 border-b border-gray-200">{row.name}</td>
                      {row.values.map((v, j) => <td key={j} className="p-3 text-center text-gray-600 border-b border-gray-200">{v}</td>)}
                    </tr>
                  ))}
                  <tr className="bg-gray-100 font-semibold">
                    <td className="p-3 text-gray-700 border-b border-gray-200">Casas y/o Dptos.</td>
                    {['$66.355.000', '$91.577.000', '$116.899.000', '$142.021.000', '$192.665.000'].map((v, j) => <td key={j} className="p-3 text-center text-gray-700 border-b border-gray-200">{v}</td>)}
                  </tr>
                  <tr className="bg-primary/10 font-semibold">
                    <td className="p-3 text-primary border-b border-gray-200">10 cuotas de</td>
                    {['$14.431.-', '$19.781.-', '$25.316.-', '$30.482.-', '$41.552.-'].map((v, j) => <td key={j} className="p-3 text-center text-primary border-b border-gray-200">{v}</td>)}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 text-center">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLScW7L4CZiGExML3emznb9QiwVBEPE59sACHtq_ND30vurUt3w/viewform?usp=header" target="_blank" rel="noreferrer" className="btn-primary">PARA CONTRATAR HACE CLICK AQUI</a>
            </div>
          </div>

          <div className="space-y-3 text-sm text-gray-600">
            <p>* Robo y/o Rotura electrónicos: Cobertura Todo Riesgo (tv, audio, Tablet, pc, notebook, play station)</p>
            <p>* Asistencia al Hogar (Topes de reintegro):</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cerrajería $29.250 por cada evento</li>
              <li>Plomería $29.250 por cada evento</li>
            </ul>
            <p>Nuevos beneficios en tu hogar: ver en <Link to="/informacion-util" className="text-accent hover:underline font-semibold">INFORMACION UTIL</Link></p>
            <p>Para más información contáctenos al <strong>4342-8721 / int. 1 Comercial</strong></p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SeguroHogar
