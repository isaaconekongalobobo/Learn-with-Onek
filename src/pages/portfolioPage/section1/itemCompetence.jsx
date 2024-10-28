
import {motion} from 'framer-motion'
/* eslint-disable react/prop-types */

const ItemCompetence = ({text, description, animationDelay}) => {
    const textVariant = {
        hidden: {
            opacity:0,
            y:-10,
        },
        visible: {
            opacity: 1,
            y:0,
            transition: {
                delay: animationDelay
            }
        },
    }
    return (
        <>
            <motion.span 
                variants={textVariant} 
                initial="hidden" 
                animate="visible" 
                whileHover={{y:10}}
                className="hover:text-jaune"
            >
            {text}
            </motion.span>
            <span>{description}</span>        
        </>
    );
}

export default ItemCompetence;
