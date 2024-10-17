/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
// Variant pour l'animation du titre
const TitleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible:{ opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

const SectionsTitle = ({text, color="#00693E"}) => {
    return (
        <>
            <motion.h1 variants={TitleVariant} initial="hidden" animate="visible" transition="transition" style={{color:color}} className='text-2xl text-center font-bold' > {text} </motion.h1>
        </>
    )
}

export default SectionsTitle;
