/* eslint-disable react/prop-types */

// J'importe framer motion
// 
import { motion } from "framer-motion";
const GeneralButton = (props) => {
    return (
        <>
            <div>
                <motion.button className={props.btnStyle} onClick={props.actionOnClick}> 
                    { props.text }
                </motion.button>
            </div>        
        </>

    );
}

export default GeneralButton;
