import SecondaryButton from "../../../../components/generalAndPartialsComponents/secondaryButton";
import TitreAnime from "./titreAnime";

// Importation de framer motion
import {motion} from 'framer-motion'

const MonDesignVariant = {
    hidden: {
        opacity: 0,
        x:-20
    },
    visible:{
        opacity:1,
        x: 20,
    },
}

const SectionAboutIsaac = () => {
    return (
        <div className="pt-28 bg-slate-50" >
            <div className='absolute bg-slate-50 flex flex-col w-full z-10 p-6 gap-12 pt-8 sm:gap-28 justify-around items-center'>
                <h1 className='text-principale text-[150%] text-center font-bold relative bottom-32  sm:bottom-24'>
                    Je partage mon 
                    <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-jaune relative inline-block m-2'>
                        <span className="relative text-principale italic">
                            parcours  
                        </span>                         
                    </span>
                    avec vous...
                </h1>
                <div className="flex flex-col sm:flex-row relative sm:top-[-50px]  ">
                    {/* Image sur le cote */}
                    <div className='relative'>
                        <motion.img 
                        src="/sectionAboutIsaac/all.png" 
                        alt="illustration des mes competences" 
                        className='w-[75%]  relative left-[15%] bottom-48 sm:bottom-48'
                        variants={MonDesignVariant}
                        initial="hidden"
                        whileInView="visible"
                        transition={{ delay: 0.5 }}
                        />
                    </div>
                    <div>
                        <div className="sm:relative sm:right-[15%]">
                            {/* Titre anime dans la section About Isaac */}
                            <TitreAnime text={"Je partage ce que j'ai appris via la communeaute dev, mes competences et experiences dans le developpement web.Via mon portfolio, je vous fais decouvrir ce que peux faire..."}/>
                            <p className="sm:w-texteSectionParcour text-gray-900 relative bottom-36 sm:bottom-16 left-3 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iusto eveniet minima praesentium perferendis a! Quam voluptates est natus id aspernatur qui. Consequuntur earum odio aspernatur, ullam repudiandae ducimus libero.</p>
                            <div className="relative left-3 bottom-32 sm:bottom-10 ">
                                <SecondaryButton text="Voir le portfoliot" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='opacity-0'>
                <img src="/sectionAboutIsaac/bg-about-isaac.jpg" alt="Initial isaac onek"  className='' />
            </div> */}

        </div>
    );
}

export default SectionAboutIsaac;

