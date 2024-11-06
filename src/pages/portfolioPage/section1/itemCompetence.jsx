
import {motion} from 'framer-motion'
import { useState } from 'react';
/* eslint-disable react/prop-types */

// Variant pour la description d'une competence
const descriptionVariant = {
    hidden: {
        opacity:0,
        y:-10,
    },
    visible: {
        opacity:1,
        y:0
    }
}
const ItemCompetence = ({text, description, animationDelay}) => {
    const textVariant = {
        hidden: {
            opacity:0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: animationDelay
            }
        },
    }
    const [showDescription, setShowDescription] = useState (false)
    // Fonction pour afficher ou masquer les details de la competence
    const showOrHidde = () => {
        setShowDescription (!showDescription)
    }
    return (
        <>
            <motion.span 
                variants={textVariant} 
                initial="hidden" 
                animate="visible" 
                whileHover={{y:10}}
                className="hover:text-jaune"
                onMouseOver={showOrHidde} onMouseLeave={showOrHidde}
            >
            {text}
            </motion.span>
            <motion.span 
                variants={descriptionVariant}
                initial="hidden"
                animate="visible"
                className={showDescription? "hidden sm:block absolute z-10 p-5 bg-slate-300 ml-1 rounded max-w-60 text-slate-600" : "hidden"} 
            >
                {description}
            </motion.span>        
        </>
    );
}

export default ItemCompetence;
