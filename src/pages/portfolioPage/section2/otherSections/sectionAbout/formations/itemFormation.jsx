/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
const itemVariant = {
    hidden: {
        opacity:0,
        scale: 0.5,
    },
    visible: {
        opacity:1,
        scale:1,
        transition: {
            delay:1,
        }
    },
    hovering: {
        scale:1.1,
        y:-5
    }
}
const ItemFormation = ({date, title, description, school, schollWebsite}) => {
    return (
        <>
            <div className='pb-5 flex items-center'>
                <hr className='rotate-90 w-36 sm:w-24 bg-[#7ED218] opacity-100 h-2' />
                <motion.div 
                    variants={itemVariant} initial="hidden" animate="visible" whileHover="hovering"
                    className='text-black hover:text-gray-800 hover:bg-gray-300 p-3 rounded'
                >
                    <span className='text-sm '>{date}</span>
                    <h3 className='font-bold text-principale'>{title}</h3>
                    <p className="">{description}, <a href={schollWebsite} className='text-principale font-medium' target="_blank">{school}</a></p>                    
                </motion.div>
            </div>
        </>
    )
}

export default ItemFormation;
