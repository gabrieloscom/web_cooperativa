import { useState, useEffect, useCallback } from 'react'

const slides = [
  { src: '/images/Banner_SeguroAutomotor1.jpg', alt: 'Seguro Automotor' },
  { src: '/images/Banner_SeguroMoto.jpg', alt: 'Seguro Moto' },
  { src: '/images/Banner_SeguroHogar1.jpg', alt: 'Seguro Hogar' },
  { src: '/images/Banner_SeguroBicicleta.jpg', alt: 'Seguro Bicicleta' },
  { src: '/images/Banner_SeguroCaucionAlquileres.jpg', alt: 'Seguro Caución' },
  { src: '/images/Banner_SeguroFamilia.jpg', alt: 'Seguro Familia' },
  { src: '/images/Banner_SeguroTrabajo.jpg', alt: 'Seguro Trabajo' },
]

function HeroSlider() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <div className="relative w-full overflow-hidden bg-gray-200 mt-1" style={{ height: 'clamp(160px, 18vw, 260px)' }}>
      {slides.map((slide, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img src={slide.src} alt={slide.alt} className="mx-auto h-full w-auto max-w-full" />
        </div>
      ))}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all" aria-label="Anterior">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all" aria-label="Siguiente">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/70'}`} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  )
}
export default HeroSlider
