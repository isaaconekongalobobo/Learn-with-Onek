import Icone from "./icon"
// J'importe framer motion 
import { motion } from "framer-motion"

// Variant pour l'animation des icones 
const allIconsVariant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  }

  
const GalleryLangages = () => {
    return (
        <>
            <motion.div className=" grid p-5 gap-4  grid-cols-2 sm:grid sm:grid-cols-2 sm:w-iconelangage" variants={allIconsVariant} initial="hidden" whileInView="visible" >
                <Icone source="/iconeLangages/icone-html.png" description="Icone html" /> 
                <Icone source="/iconeLangages/icone-css.png" description="Icone Css" /> 
                <Icone source="/iconeLangages/icone-js.png" description="Icone JavaScript" /> 
                <Icone source="/iconeLangages/icone-php.png" description="Icone Php" /> 
            </motion.div>
        </>
    )
}

export default GalleryLangages