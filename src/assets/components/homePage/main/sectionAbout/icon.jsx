/* eslint-disable react/prop-types */
// J'importe framer motion 
import { motion } from "framer-motion"
const Icone = (props) => {
    return (
        <>
            <motion.img 
            initial={{y: 20, opacity: 0 }} 
            animate={{y: 0,opacity: 1}} 
            src={props.source} 
            alt={props.description} 
            className="size-40 border-b-4 border-transparent hover:border-jaune hover:border-b-2 sm:size-full  sm:w-full sm:rounded-[12px] sm:object-cover"
            whileHover={{rotate:25}}
            />
        </>
    )
}

export default Icone