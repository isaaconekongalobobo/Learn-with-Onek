import Icone from "./icon"
// J'importe framer motion 
import { motion } from "framer-motion"
  
const GalleryLangages = () => {
    return (
        <>
            <motion.div 
            initial={{opacity: 1, scale: 0 }}
            animate={{opacity: 1,scale: 1,transition: {delayChildren: 0.3,staggerChildren: 0.2}}} 
                className=" grid p-5 gap-4  grid-cols-2 sm:grid sm:grid-cols-2 sm:w-iconelangage">
                <Icone source="/iconeLangages/icone-html.png" description="Icone html" /> 
                <Icone source="/iconeLangages/icone-css.png" description="Icone Css" /> 
                <Icone source="/iconeLangages/icone-js.png" description="Icone JavaScript" /> 
                <Icone source="/iconeLangages/icone-php.png" description="Icone Php" /> 
            </motion.div>
        </>
    )
}

export default GalleryLangages