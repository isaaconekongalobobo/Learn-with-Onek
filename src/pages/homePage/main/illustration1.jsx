import { motion } from "framer-motion"

const Illustration1 = () => {
    return (
        <>
            <motion.img initial={{x:10, rotate:45}} animate={{x:0, rotate:0}}
            src="Learning.gif" alt="Illustration de l'univers de l'apprentissage" 
            className="w-80 rounded-full "
            />
        </>
    )
}
export default Illustration1