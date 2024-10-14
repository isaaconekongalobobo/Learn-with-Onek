import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sophie Martin",
    comment: "Ce produit a complètement transformé ma routine quotidienne. Je ne peux plus m'en passer !",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Thomas Dubois",
    comment: "Le service client est exceptionnel. Ils ont résolu mon problème en un rien de temps.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Emma Leroy",
    comment: "J'adore la qualité et le design. C'est exactement ce que je recherchais depuis longtemps.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Lucas Petit",
    comment: "Incroyable rapport qualité-prix. Je recommande vivement à tous mes amis.",
    image: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Chloé Rousseau",
    comment: "L'application est intuitive et facile à utiliser. Ça a vraiment simplifié ma vie !",
    image: "/placeholder.svg?height=100&width=100"
  }
]

const SectionTemoignage = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return
        e.preventDefault()
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: 'smooth'
        })
      }
      el.addEventListener('wheel', onWheel)
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [])

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset
  }

  return (
    <section className="py-12 bg-gradient-to-br from-emerald-500 to-emerald-900 relative top-[680px] sm:top-96">
    <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ce que disent nos clients
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Découvrez les expériences de ceux qui nous font confiance
        </motion.p>
        <div className="relative">
          <button 
            onClick={() => scroll(-300)} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => scroll(300)} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div 
            ref={scrollRef} 
            className="flex overflow-x-auto space-x-6 py-4"
            style={{ 
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl"
                style={{ scrollSnapAlign: 'start' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                </div>
                <p className="text-white">{testimonial.comment}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTemoignage