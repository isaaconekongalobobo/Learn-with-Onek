/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
// Variant pour le sous-titre
const subTitleVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.2 }
  }
const SubTitle = ({text, color="#00693E"}) => {
    return (
        <motion.p className="text-xl text-center mb-12" variants={subTitleVariant} initial="hidden" whileInView="visible" transition="transition" style={{color:color}}>{text}</motion.p>
    );
}

export default SubTitle;
