import { motion } from "framer-motion"

const Illustration1 = () => {
    return (
        <>
            <motion.img 
            initial={{x:10, rotate:45}} 
            animate={{x:0, rotate:0}}
            whileHover={{scale:1.1, rotate:10,}}
            src="Learning.gif" alt="Illustration 1" className="w-illustration1 mt-10 relative sm:top-5 rounded-full shadow-lg"/>
        </>
    )
}
export default Illustration1