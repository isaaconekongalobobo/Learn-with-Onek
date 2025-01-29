/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const DivVariant = {
  hidden : { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: 0.1 }
}

const TestimonialCard = ({userImage, userName, userComment}) => {
    return (
        <motion.div 
        className="flex-shrink-0 w-80 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-xl" 
        style={{ scrollSnapAlign: 'start' }} variants={DivVariant} initial="hidden" whileInView="visible" whileHover={{y:-8,}} transition="transition" >
            <div className="flex items-center mb-4">
            <img src={userImage} alt={`Temoignage de ${userName}`} className="w-16 h-16 rounded-full mr-4 object-cover"/>
            <h3 className="text-xl font-semibold text-white">{userName}</h3>
            </div>
            <p className="text-white">{userComment}</p>
        </motion.div>
    );
}

export default TestimonialCard;
