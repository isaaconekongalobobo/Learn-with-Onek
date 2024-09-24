/* eslint-disable react/prop-types */

// J'importe framer motion
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';

// Je creer des variants pour animer le svg
const svgVariant = {
    unLiked: {

    },
    liked: {
        
    }

}

// Je recupere en parametre un props, setLikes afin d'incrementer ou de decrementer le nombre des likes
const LikeIcon = ({likes, setLikes}) => {

    // Je cree un etat qui va stocker et changer la couleur de l'icone, et qui a comme valeur par defaut le blanc
    const [likeColor, setLikeColor] = useState('#ffffff')
    // Je cree un etat booleen sur lequel je vais me baser pour modifier la couleur du like
    const [liked, setLiked] = useState (false)

    // Cette fonction change la valeur de liked au contraire de sa valeur actuelle lorsque l'utilisateur clique sur l'icone
    const click = () => {
        setLiked (!liked)
    }

    // Le hook useEffect ici a une fonction qui change la couleur de l'icone si la valeur de liked, qui lui est passe comme 
    // dependances change egalement
    useEffect (()=> {
        if (liked) {
            setLikeColor('#f44336')
            setLikes (likes + 1)
            console.log("Vous avez likee!");
            
        } else if (!liked) {
            setLikeColor('#ffffff')
            setLikes (likes - 1)
            console.log("Vous n'aimez plus...");
        }
    },[liked])

    return (
        <div className="flex gap-2">
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
            <span className='relative top-1'> {likes} </span>
        </div>
    );
}

export default LikeIcon;
