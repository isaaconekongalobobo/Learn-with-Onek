/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
const ItemFormation = ({date, title, description, school, schollWebsite}) => {
    return (
        <>
            <div className='pb-5 flex items-center'>
                <hr className='rotate-90 w-36 sm:w-24 bg-[#7ED218] opacity-100 h-2' />
                <motion.div className='text-black hover:text-gray-800 hover:bg-gray-300 p-3'>
                    <span className='text-sm '>{date}</span>
                    <h3 className='font-bold text-principale'>{title}</h3>
                    <p className="">{description}, <a href={schollWebsite} className='text-principale font-medium' target="_blank">{school}</a></p>                    
                </motion.div>
            </div>
        </>
    )
}

export default ItemFormation;
