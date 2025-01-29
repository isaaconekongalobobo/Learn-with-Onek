import {motion} from 'framer-motion'
import { Outlet } from 'react-router-dom';
import Onglets from '../components/onglets';

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
        <>
            <motion.section variants={sectionVariant} initial="hidden" animate="visible" className="pt-16 px-16 xs:px-8 flex flex-col gap-5 sm:gap-10 bg-white">
                <Onglets/>
                <Outlet/>
            </motion.section>        
        </>

    );
}

export default Section2;
