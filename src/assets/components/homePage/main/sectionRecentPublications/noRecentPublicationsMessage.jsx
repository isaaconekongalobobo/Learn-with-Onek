// J'importe framer motion
import {motion} from 'framer-motion'

const NoRecentPublicationsMessage = () => {
    return (
        <>
            <div className='flex flex-col justify-center gap-5 relative top-[-80px] sm:top-[-40px]'>
                <h1 className=" text-principale text-center text-wrap font-medium text-[26px] sm:text-[28px]" >Aucune publication recente</h1>
                <motion.img 
                src="/sectionRecentPublications/Empty.gif" 
                alt="Illustration aucune publication"
                initial={{ opacity:0, x: -100 }}
                animate={{ opacity:1, x: 100  }}
                className=' relative right-24 sm:right-20 size-72 sm:size-80 rounded-full border-2 border-principale'
                />
            </div>
        </>
    );
}

export default NoRecentPublicationsMessage;
