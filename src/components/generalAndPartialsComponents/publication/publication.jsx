/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PublicationDetails from "./publicationdetails/publicationDetails";
import PublicationImage from "./publicationImage";

import {motion} from 'framer-motion'


const Publication = ({post}) => {
    const [likeNumber, setLikeNumber] = useState(post.likes || 0)
    const [comments] = useState(post.comments)
    const [title, setTitle] = useState(post.title)

    // Tronquer le titre au cas ou elle est longue
    useEffect (() => {
        const textLength = 20
        if (title.length > textLength) {
            setTitle(title.slice(0, textLength) + "...")
        }
    })
    return (
        <>
            <motion.div whileHover={{ y:-5 }} className="bg-main-green px-2 py-6 rounded"> 
                <div className="flex gap-4 items-center relative sm:static left-4">
                    <img src="" alt="" />
                    <div className="flex flex-col">
                        <h2 className="text-white font-medium"> Isaac Onek </h2>                        
                        <p className="text-xs text-white"> { post.date } </p>
                    </div>  
                </div>   

                <h2 className="relative left-7 sm:left-2 sm:mb-1 text-xl font-medium"> {title} </h2> 
                <PublicationImage urlImage={ post.image } />
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
