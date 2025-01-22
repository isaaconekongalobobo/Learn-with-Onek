import { PlayCircle } from "lucide-react";
import {AnimatePresence, motion} from 'framer-motion'
import { useState } from "react";

const imgVariant = {
    initial: {},
    animate: {},
    whenHover: {scale:1.1}
}

const btnPlayVariant = {
    initial: { opacity: 0, scale: 0.5, y:20 },
    animate: { opacity: 1, scale: 1.1, y:0 },
    exit: { opacity: 0, scale: 0.5 },
    transition: { duration: 0.5 }
  }

const BtnPlay = () => {
    const [color, setColor] = useState ('#ffffff')
    const changeColor = (value) => {
        setColor (value)
    }
    return (
        <AnimatePresence>
            <motion.button variants={btnPlayVariant}
            className="bg-[#7ED218] size-16 flex justify-center items-center rounded-full absolute "
            initial="initial" animate="animate" exit="exit" transition="transition"
            > 
                <PlayCircle className={`size-14 text-[${color}] `} onMouseOver={() => {changeColor ('#00693E')}} onMouseLeave={() => {changeColor ('#ffffff')}} /> 
            </motion.button>            
        </AnimatePresence>

    )
}


/* eslint-disable react/prop-types */
const CardMusique = ({music}) => {
    const [btnPlay, setBtnPlay] = useState (false)
    const showOrHidde = (value) => {
        setBtnPlay (value)
    }
    return (
        <div className="flex flex-col items-center gap-2" onMouseOver={() => {showOrHidde(true)}} onMouseLeave={() => {showOrHidde (false)}}>
            <motion.img src={music.image} alt={music.artist} variants={imgVariant}
                className="rounded-full w-40 border-8 border-transparent hover:border-[#00693E] "
                whileHover="whenHover"
            />
            {/* Bouton pour jouer le morceau */}
            <span className={btnPlay ? "opacity-100 relative bottom-14 left-16 " : "opacity-0" }>
                { btnPlay && <BtnPlay/> }
                
            </span>

            <div className="text-slate-900 text-center">
                <h4 className="font-medium text-[#00693E] " > {music.artist} </h4>
                <p className="text-sm" > {music.musicGender} </p>                
            </div>
        </div>
    );
}

export default CardMusique;
