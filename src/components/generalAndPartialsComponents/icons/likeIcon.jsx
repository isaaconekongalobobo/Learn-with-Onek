/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

// J'importe framer motion
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';


// Je recupere en parametre un props, setLikes afin d'incrementer ou de decrementer le nombre des likes
const LikeIcon = ({likes, setLikes}) => {

    const [likeColor, setLikeColor] = useState('#ffffff')
    const [liked, setLiked] = useState (false)

    const click = () => setLiked (!liked)

    useEffect (()=> {
        if (liked) {
            setLikeColor('#f44336')
            setLikes(likes+1)
            console.log("Vous avez likee!");
            
        } else if (!liked) {
            setLikeColor('#ffffff')
            if (likes > 0) {
                setLikes (likes - 1)
            }
            console.log("Vous n'aimez plus...");
        }
    },[liked])

    return (
        <div className="flex items-center gap-1">
            <motion.svg  onClick={click} className="size-8 outline-none" whileHover={{ scale:1.2}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path fill={likeColor} d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12"></path>
            </motion.svg>                
            <span className='relative top-1'> {likes} </span>
        </div>
    );
}

export default LikeIcon;
