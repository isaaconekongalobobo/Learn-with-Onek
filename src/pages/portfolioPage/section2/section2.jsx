import {motion} from 'framer-motion'
import Onglet from "./onglet";
import { Outlet } from 'react-router-dom';

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
        <motion.section variants={sectionVariant} initial="hidden" animate="visible" className="pt-0 flex flex-col gap-5 sm:gap-10">
            <div>
                <div className="flex justify-between p-10  sm:justify-center sm:gap-20 text-sm relative top-[-30px] sm:static ">
                    <Onglet to="about" text="A propos"/>
                    <Onglet to="projets" text="Projets"/>
                    <Onglet to="designs" text="Designs"/>
                    <Onglet to="feeds" text="Feeds"/>
                </div>
            </div>
            {/* Pour afficher les composant enfant via les routes imbriquee */}
            <Outlet/>
        </motion.section>
    );
}

export default Section2;
