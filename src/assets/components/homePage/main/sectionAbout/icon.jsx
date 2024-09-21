/* eslint-disable react/prop-types */
// J'importe framer motion 
import { motion } from "framer-motion"

// Variant pour l'animation de l'icone
    
const IconVariant = {
    hidden: { y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    }
  }
const Icone = (props) => {
    return (
        <>
            <motion.img variants={IconVariant}
            initial="hidden" 
            animate="visible"
            src={props.source} 
            alt={props.description} 
            className="size-40 border-b-4 border-transparent hover:border-jaune hover:border-b-2 sm:size-full  sm:w-full sm:rounded-[12px] sm:object-cover"
            whileHover={{rotate:25, scale:1.2}}
            />
        </>
    )
}

export default Icone