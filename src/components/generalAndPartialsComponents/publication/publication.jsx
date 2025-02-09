/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PublicationDetails from "./components/publicationDetails";
import PublicationImage from "./components/publicationImage";

import {motion} from 'framer-motion'
import AuthorProfile from "./components/authorProfile";


const Publication = ({post}) => {
    const [likeNumber, setLikeNumber] = useState(post.likes || 0)
    const [comments] = useState(post.comments)
    const [title, setTitle] = useState(post.title)

    // Fonction pour mettre chaque mot du titre en majuscule
    function capitalizeWords(str) {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
    }

    // Tronquer le titre au cas ou elle est longue
    useEffect (() => {
        const textLength = 20
        if (title.length > textLength) {
            setTitle( capitalizeWords (title.slice(0, textLength) + "...") )
        }
    })

    return (
        <>
            <motion.div whileHover={{ y:-5 }} className="bg-slate-50 text-slate-900 shadow-lg backdrop-blur-md px-2 py-6 rounded flex flex-col gap-3"> 
                <div className="flex items-center gap-2">
                    <AuthorProfile/>
                    <div className="flex flex-col">
                        <h1 className="font-medium"> Isaac Onek </h1>                        
                        <p className="text-xs"> { post.date } </p>
                    </div>  
                </div>  

                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-medium"> {title} </h2> 
                    <div className="flex justify-center">
                        <PublicationImage urlImage={ post.image } />
                    </div>                    
                </div> 

                <PublicationDetails 
                    publicationId={ post.id } 
                    likes={likeNumber}
                    setLikes={setLikeNumber}
                    comments={comments || 0}
                    setComments=""
                />
            </motion.div>
        </>
    );
}

export default Publication;
