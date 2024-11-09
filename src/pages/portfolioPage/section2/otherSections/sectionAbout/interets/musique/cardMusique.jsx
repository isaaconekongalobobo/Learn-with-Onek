import { PlayCircle } from "lucide-react";
import {motion} from 'framer-motion'
import { useState } from "react";

const imgVariant = {
    initial: {},
    animate: {},
    whenHover: {scale:1.1}
}

const BtnPlay = () => {
    return (
        <button> 
            <PlayCircle/> 
        </button>
    )
}


/* eslint-disable react/prop-types */
const CardMusique = ({music}) => {
    const [btnPlay, setBtnPlay] = useState (false)
    const showOrHidde = (value) => {
        setBtnPlay (value)
    }
    return (
        <div className="flex flex-col items-center gap-2">
            <motion.img src={music.image} alt={music.artist} variants={imgVariant}
            className="rounded-full w-[70%] border-8 border-transparent hover:border-[#00693E] "
            onMouseOver={() => {showOrHidde(true)}}
            onMouseLeave={() => {showOrHidde (false)}}
            />
            <div className="text-slate-900 text-center">
                <h4> {music.artist} </h4>
                <p> {music.musicGender} </p>
                {
                    btnPlay && <BtnPlay/>
                }
            </div>
        </div>
    );
}

export default CardMusique;
