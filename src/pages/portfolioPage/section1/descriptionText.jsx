/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
const textVariant = {
    hidden: {
        opacity:0,
        y:-20,
    },
    visible: {
        opacity:1,
        y:1,
        transition: {
            delay: 2.5
        }
    }
}
const DescriptionText = ({text}) => {
    return (
        <motion.div variants={textVariant} initial="hidden" animate="visible" className="mt-2">
            <p className="text-sm">{text}</p><br />
        </motion.div>
    );
}

export default DescriptionText;
