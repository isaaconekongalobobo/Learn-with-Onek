/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
const divVariant = {
    hidden: {
        opacity:0,
        x:-20
    },
    visible: {
        opacity:1,
        x:0
    }
}
const ErrorSection = ({message}) => {
    return (
        <motion.div variants={divVariant} initial="hidden" animate="visible" className="text-principale text-center w-[100%] m-auto p-8">
            <h4 > {message} </h4>
        </motion.div>
    );
}

export default ErrorSection;
