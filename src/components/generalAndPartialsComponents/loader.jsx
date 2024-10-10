// Importation de framer motio
import {motion} from 'framer-motion'

const Loader = () => {
    return (
        <div className="flex justify-center ">
            <motion.h5 initial={{opacity:0}} whileInView={{opacity:1}} className="text-principale font-medium text-[150%]"> Chargement...</motion.h5>
        </div>
    );
}

export default Loader;
