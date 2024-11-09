import Competences from "./competences/competences";
import ExperiencesSection from "./experiences/experiences";
import Formations from "./formations/formations";
import {motion} from 'framer-motion'
const sectionVariant = {
    hidden: {opacity:0, scale: 0.5},
    visible: {
        opacity: 1,
        scale:1,
    }
}

const AboutSection = () => {
    return (
        <motion.section 
            variants={sectionVariant} 
            initial="hidden" 
            animate="visible" 
            className="bg-white p-5"
        >

            <div className="flex flex-col gap-4">
                <Formations/>
                <ExperiencesSection/>
                <Competences/>
            </div>
        </motion.section>
    );
}

export default AboutSection;
