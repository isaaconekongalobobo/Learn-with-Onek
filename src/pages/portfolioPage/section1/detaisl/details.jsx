import { FaWhatsapp } from "react-icons/fa";
import {motion} from 'framer-motion'
import SocialMediaButtons from "./socialMedias";

const blocParentVariant = {
    hidden: {
        opacity: 0,
        x: 30,
    },
    visible: {
        opacity:1,
        x:0,
        transition: {
            delay: 2.5
        }
    }
}
const btnWhatsappVariants = {
    hidden: {
        opacity:0,
        scale: 0.5
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 3
        }
    },
}

const Details = () => {
    return (
        <motion.div className="flex flex-col gap-5" variants={blocParentVariant} initial="hidden" animate="visible">
            <SocialMediaButtons/>
            <motion.a href="https://wa.me/+243971648935" 
            className="flex items-center justify-center gap-2 p-2 rounded bg-[#7ED218] text-[#1E293B] w-40"
            target="_blank" rel="noopener noreferrer"
            variants={btnWhatsappVariants} initial="hidden" animate="visible" whileHover={{y:-10}}
            >
                <span>Contactez-moi</span>
                <FaWhatsapp className="font-bold size-6"/>
            </motion.a>
        </motion.div>
    );
}

export default Details;
