/* eslint-disable react/prop-types */
// Importation de framer motion
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

// Ce composant Futur sert a mettre en evidence le mot futur! dans la phrase d'accroche
const Futur = () => {
    return (
        <strong className="text-jaune opacity-90">futur!</strong>
    )
}
const Accroche = (props) => {
    // Je sectionne la phrase en plusieurs mot 
    const mots = props.text.split(" ");
    return (
        <motion.div className="flex flex-wrap" style={{ overflow: "hidden"}} variants={container} initial="hidden" animate="visible" >
        {mots.map((word, index) => (
          <motion.span initial={{x:10, opacity:0}} animate={{x:0, opacity:1}} className={"text-4xl font-pavelt text-center sm:text-left sm:relative sm:left-2"} variants={child} style={{ marginRight: "5px" }} key={index}>
            {
                word === 'futur!'? <Futur/>: word
            }
          </motion.span>
        ))}
      </motion.div>
    );
}

export default Accroche;
