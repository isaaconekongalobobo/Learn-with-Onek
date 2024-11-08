/* eslint-disable react/no-unescaped-entities */
import {motion} from 'framer-motion'
const textVariant = {
    hidden: {
        opacity:0,
        y:-20,
    },
    visible: {
        opacity:1,
        y:1,
        transition: {
            delay: 2.5
        }
    }
}
const DescriptionText = () => {
    return (
        <motion.div variants={textVariant} initial="hidden" animate="visible" className="mt-2">
            <p className="text-sm text-wrap font-sans p-2 pl-0">
                Salut! 👋, je m'appelle Isaac Onekonga, développeur web, designer graphique et web designer, je conçois des solutions impliquant le développement web, en partant de l'analyse des besoins de mes clients jusqu'à la mise en production de leurs projets.
            <br /><br />Besoin de mon expertise?
            <br />
                N'hesitez pas a me contacter 
            </p>
        </motion.div>
    );
}

export default DescriptionText;
