import { useRef, useEffect } from 'react'
import SectionsTitle from '../../../../components/generalAndPartialsComponents/sectionsTitle'
import SubTitle from '../../../../components/generalAndPartialsComponents/subTitle'
import TestimonialCard from './components/testimonialCard'

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
const titleText = "Ils ont tiré profit de cette plateforme, ils en parlent..."

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

  return (
    <section className="py-10 bg-gradient-to-br from-emerald-500 to-emerald-900 ">
      <div className="container mx-auto px-4">
        <div className='flex flex-col gap-3'>
          <SectionsTitle text={titleText} color='#ffffff' />
          <SubTitle text="Découvrez les expériences des personnes qui ont se sont forme grâce a cette plateforme et qui partagent leur expérience" color='#ffffff' />
        </div>
        <div className="relative">
          <div ref={scrollRef} className="flex overflow-x-auto space-x-6 py-4"style={{ scrollSnapType: 'x mandatory',scrollbarWidth: 'none',msOverflowStyle: 'none'}}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} userImage={testimonial.image} userName={testimonial.name} userComment={testimonial.comment}/>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionTemoignage