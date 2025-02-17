/* eslint-disable react/prop-types */
// Importation de franer motion
import { motion } from "framer-motion";

// Je creer une variante pour la div contenant le texte
const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

// Je creer une autre variante pour chaque mot
const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const TitreAnime = ({ text }) => {
const mots = text.split(" ");

  return (
    <motion.p 
      className="w-titrePhoneDevice  sm:w-texteSectionAcceuil text-2xl sm:text-titrePhoneDevice  flex flex-wrap" 
      style={{ overflow: "hidden", display: "flex", fontSize: "25px", fontWeight:"semi-bold" }} 
      variants={container} initial="hidden" whileInView="visible" transition={{ delay: 1 }}>

        
      {mots.map((word, index) => (
        <motion.span className="text-principale" variants={child} style={{ marginRight: "5px" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TitreAnime;