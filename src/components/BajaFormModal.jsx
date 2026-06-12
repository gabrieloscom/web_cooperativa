import { useState } from 'react'

const patterns = {
  patente: { regex: /^[A-Za-z]{1,3}\s?\d{3}[A-Za-z]{0,2}$/, message: 'Formato inválido (ej: ABC 123 o AB123CD)', allow: /[A-Za-z0-9\s]/ },
  poliza: { regex: /^\d+$/, message: 'Solo números', allow: /\d/ },
}

const fields = {
  vehiculo: {
    title: 'Baja de Vehículo o Moto',
    number: '11-6000-5110',
    inputs: [
      { name: 'patente', label: 'Número de patente', placeholder: 'Ej: ABC 123', pattern: patterns.patente },
      { name: 'fecha', label: 'Fecha a partir de la cual solicitás la baja', type: 'date' },
      { name: 'motivo', label: 'Motivo', type: 'select', options: ['Venta', 'Cambio de aseguradora', 'Sin uso', 'Otros'] },
      { name: 'motivoOtro', label: 'Especificar motivo', placeholder: 'Describí el motivo...', dependsOn: 'motivo', dependsValue: 'Otros' },
    ],
    whatsappMsg: (data) => {
      const motivo = data.motivo === 'Otros' ? data.motivoOtro : data.motivo
      return `[BAJA VEHICULO]%0AHola, quiero solicitar la baja de mi vehículo/moto.%0A%0APatente: ${data.patente}%0AFecha de baja: ${data.fecha}%0AMotivo: ${motivo}`
    },
  },
  otros: {
    title: 'Bajas otros Ramos',
    number: '11-6000-5110',
    inputs: [
      { name: 'poliza', label: 'Número de póliza', placeholder: 'Ej: 123456', pattern: patterns.poliza },
      { name: 'fecha', label: 'Fecha a partir de la cual solicitás la baja', type: 'date' },
      { name: 'tipoPersona', label: 'Tipo de identificación', type: 'radio', options: ['Apellido y Nombre', 'DNI'] },
      { name: 'nombre', label: '', placeholder: '', dependsOn: 'tipoPersona', dynamicLabel: { 'Apellido y Nombre': 'Apellido y nombre', 'DNI': 'DNI' }, dynamicPlaceholder: { 'Apellido y Nombre': 'Ej: García, Juan', 'DNI': 'Ej: 20.123.456' }, dynamicPattern: { 'Apellido y Nombre': { regex: /^[A-Za-záéíóúñüÁÉÍÓÚÑÜ\s,]+$/, message: 'Solo letras y espacios', allow: /[A-Za-záéíóúñüÁÉÍÓÚÑÜ\s,]/ }, 'DNI': { regex: /^\d{1,2}\.?\d{3}\.?\d{3}$/, message: 'Solo números (ej: 20.123.456)', allow: /[\d.]/ } } },
    ],
    whatsappMsg: (data) =>
      `[BAJA OTROS]%0AHola, quiero solicitar la baja de mi seguro.%0A%0AN° de póliza: ${data.poliza}%0AFecha de baja: ${data.fecha}%0A${data.tipoPersona}: ${data.nombre}`,
  },
}

function BajaFormModal({ type, onClose }) {
  const config = fields[type]
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [sending, setSending] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    const inp = config.inputs.find((i) => i.name === name)
    const pattern = inp ? getPattern(inp) : null
    const filtered = pattern?.allow ? value.split('').filter((c) => pattern.allow.test(c)).join('') : value
    const next = { ...formData, [name]: filtered }
    if (name === 'tipoPersona') next.nombre = ''
    setFormData(next)
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  function getPattern(inp) {
    if (inp.dynamicPattern && formData[inp.dependsOn]) {
      return inp.dynamicPattern[formData[inp.dependsOn]]
    }
    return inp.pattern
  }

  function shouldSkip(inp) {
    if (!inp.dependsOn) return false
    const parentVal = formData[inp.dependsOn]
    if (!parentVal) return true
    if (inp.dependsValue && parentVal !== inp.dependsValue) return true
    return false
  }

  function validate() {
    const newErrors = {}
    for (const inp of config.inputs) {
      if (shouldSkip(inp)) continue
      const val = formData[inp.name]
      const pattern = getPattern(inp)
      if (!val?.trim()) {
        newErrors[inp.name] = 'Campo obligatorio'
      } else if (pattern && !pattern.regex.test(val.trim())) {
        newErrors[inp.name] = pattern.message
      }
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return
    setSending(true)
    const msg = config.whatsappMsg(formData)
    window.open(`https://wa.me/549${config.number.replace(/\D/g, '')}?text=${msg}`, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-primary">{config.title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors text-xl leading-none">&times;</button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          {config.inputs.map((inp) => {
            if (shouldSkip(inp)) return null

            const label = inp.dynamicLabel ? inp.dynamicLabel[formData[inp.dependsOn]] : inp.label
            const placeholder = inp.dynamicPlaceholder ? inp.dynamicPlaceholder[formData[inp.dependsOn]] : inp.placeholder

            return (
              <div key={inp.name}>
                <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                {inp.type === 'date' ? (
                  <input
                    type="date"
                    name={inp.name}
                    value={formData[inp.name] || ''}
                    onChange={handleChange}
                    required
                    className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${errors[inp.name] ? 'border-red-400' : 'border-gray-300'}`}
                  />
                ) : inp.type === 'radio' ? (
                  <div className="flex gap-4">
                    {inp.options.map((opt) => (
                      <label key={opt} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                        <input
                          type="radio"
                          name={inp.name}
                          value={opt}
                          checked={formData[inp.name] === opt}
                          onChange={handleChange}
                          className="accent-accent"
                        />
                        {opt}
                      </label>
                    ))}
                  </div>
                ) : inp.type === 'select' ? (
                  <select
                    name={inp.name}
                    value={formData[inp.name] || ''}
                    onChange={handleChange}
                    required
                    className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${errors[inp.name] ? 'border-red-400' : 'border-gray-300'}`}
                  >
                    <option value="">Seleccionar...</option>
                    {inp.options.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    name={inp.name}
                    value={formData[inp.name] || ''}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent ${errors[inp.name] ? 'border-red-400' : 'border-gray-300'}`}
                  />
                )}
                {errors[inp.name] && <p className="text-red-500 text-[11px] mt-1">{errors[inp.name]}</p>}
              </div>
            )
          })}
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 px-4 py-2.5 rounded-lg transition-colors">
              Cancelar
            </button>
            <button
              type="submit"
              disabled={sending}
              className="flex-1 text-sm font-semibold text-white bg-accent hover:bg-[#4A7AB8] disabled:opacity-50 px-4 py-2.5 rounded-lg transition-colors"
            >
              {sending ? 'Enviando...' : 'Enviar por WhatsApp'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BajaFormModal
