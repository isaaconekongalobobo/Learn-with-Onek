import SecondaryButton from "../../../../components/generalAndPartialsComponents/secondaryButton";
import {motion} from 'framer-motion'
const mainTitle = "Je partage ce que j'ai appris via la communeaute dev, mes competences et experiences dans le developpement web.Via mon portfolio, je vous fais decouvrir ce que peux faire..." 
const subTitle = "Vous pouvez trouver mon porfolio avec toutes mes experiences, les projet que j'ai eu a mener, et mon parcours proffessionnel."

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
        <section className="py-10 px-16 xs:px-8 bg-slate-50" >
            <h1 className='text-principale  text-center font-medium text-2xl'>
                Je partage mon 
                <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-jaune relative inline-block m-2'>
                    <span className="relative text-principale italic"> parcours </span>                         
                </span>
                avec vous...
            </h1>
            <div className="flex xs:flex-col items-center xs:gap-6 ">
                <motion.img src="/sectionAboutIsaac/all.png" alt="illustration des mes competences" 
                className='w-[30rem] xs:w-80'
                variants={MonDesignVariant} initial="hidden" whileInView="visible" transition={{ delay: 0.5 }}
                />
                <div className="w-2/4 xs:w-full xs:items-center  flex flex-col gap-4 ">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl text-main-green xs:text-center"> {mainTitle} </h2>
                        <p className="text-gray-800 xs:text-center "> {subTitle} </p>
                    </div>
                    <SecondaryButton text="Voir le portfoliot" url="/portfolio" />                    
                </div>

            </div>
        </section>
    );
}

export default SectionAboutIsaac;

