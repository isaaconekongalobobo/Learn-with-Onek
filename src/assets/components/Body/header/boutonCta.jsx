// J'importe framer motion 
import { motion } from "framer-motion"

const BoutonCta  = () => {
    return (
        <>
        <div>
            <motion.a 
            href="/inscription" className="  bg-aliceblue p-4 rounded-full text-principale hover:bg-principale hover:text-white hover:border-2 hover:border-white ">Commencer le cours</motion.a>
        </div>
        </>
    )
}

export default BoutonCta