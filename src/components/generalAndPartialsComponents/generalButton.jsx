/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
const btnVariant= {
    hidden : {},
    visible: { },
    click: {},
    whenHover: {
        scale: 1.1, y:-10
    }
}
const GeneralButton = ({btnStyle,actionOnClick=() =>{}, text}) => {
    return (
        <>
            <div>
                <motion.button className={btnStyle} onClick={actionOnClick} variants={btnVariant} whileHover={"whenHover"} > 
                    { text }
                </motion.button>
            </div>        
        </>

    );
}

export default GeneralButton;
