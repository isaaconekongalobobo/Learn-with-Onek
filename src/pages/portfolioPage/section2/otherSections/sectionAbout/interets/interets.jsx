import {motion} from 'framer-motion'
import Musique from './musique/musique';
const Interets = () => {
    return (
        <section className='p-3 sm:p-10 relative sm:static top-16'>
            {/* Page title */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                <h2 className="text-xl font-bold text-gray-800 mb-4"> {"Mes centres d'interets"}</h2>
                <div className="w-20 h-1 bg-[#7ED218] mx-auto rounded-full"></div>
            </motion.div>
            <div className=''>
                <Musique/>
            </div>
        </section>
    );
}

export default Interets;
