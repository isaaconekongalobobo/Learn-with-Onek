
// J'importe framer motion
import {motion} from 'framer-motion'
import { useState } from 'react';

// Je creer des variants pour animer le svg
const svgVariant = {
    unLiked: {

    },
    liked: {
        
    }

}

// Je recupere en parametre un props, setLikes afin d'incrementer ou de decrementer le nombre des likes
const LikeIcon = () => {
    // Je creer un hook qui va stocker et changer la couleur de l'icone
    const [likeColor, setLikeColor] = useState('#ffffff')
    const click = () => {
        setLikeColor('#f44336')
    }


    return (
        <div>
            <motion.svg  
            onClick={click} 
            variants={svgVariant} 
            initial="unLiked" 
            whileTap="liked"
            className="size-8"
            whileHover={{ scale:1.5}}
            
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill={likeColor} d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12"></path>
            </motion.svg>
        </div>
    );
}

export default LikeIcon;
