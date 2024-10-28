import {motion} from 'framer-motion'
import Onglet from "./onglet";
// Variant pour la section
const sectionVariant = {
    hidden: {
        opacity:0,
    },
    visible: {
        opacity:1,
        transition: {
            delay:3
        }
    }
}

const Section2 = () => {
    return (
        <motion.section variants={sectionVariant} initial="hidden" animate="visible" className="p-10 pt-0 flex flex-col gap-5 sm:gap-10">
            <div>
                <div className="flex justify-between sm:justify-center sm:gap-20 text-sm relative top-[-30px] sm:static ">
                    <Onglet to="" text="A propos"/>
                    <Onglet to="" text="Projets"/>
                    <Onglet to="" text="Designs"/>
                    <Onglet to="" text="Feeds"/>
                </div>
            </div>
        </motion.section>
    );
}

export default Section2;
