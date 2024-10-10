/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import AuthorImage from "./authorImage";
import PublicationDetails from "./publicationdetails/publicationDetails";
import PublicationImage from "./publicationImage";

// J'importe framer motion
import {motion} from 'framer-motion'

// J'importe le composant <link> de react router afin de creer un lien pour chaque publications
import { Link } from "react-router-dom";

const Publication = ({publicationInfo}) => {
    // Je creer des hook pour modifier les informations d'une publication
    const [likeNumber, setLikeNumber] = useState(publicationInfo.likes || 0)
    const [comments] = useState(publicationInfo.comments)
    const [shares] = useState(publicationInfo.shares)
    // State pour le titre de la publication
    const [title, setTitle] = useState(publicationInfo.title)
    useEffect (() => {
        const textLength = 20
        if (title.length > textLength) {
            setTitle(title.slice(0, textLength) + "...")
        }
    })
    return (
        <>
            <motion.div whileHover={{y:-15}} className="bg-[#00563B] p-[5%] w-[120%] sm:w-80  sm:p-[2%] rounded-3xl flex flex-col gap-2 shadow-md"> 
                <div className="flex gap-4 items-center relative sm:static left-4">
                    <AuthorImage urlImage={publicationInfo.authorImage || '/Mes pics/isaac-speek.jpeg'} />
                    <div className="flex flex-col">
                        <h2 className="text-white font-medium"> {publicationInfo.firstName || 'Isaac'} {publicationInfo.name || 'Onek'} </h2>                        
                        <p className="text-xs text-white"> {publicationInfo.publicationdate || 'Le 06/09/2024'} </p>
                    </div>  
                </div>   
                {/* Titre de l'article */}
                <div>
                    <h2 className="relative left-7 sm:left-2 sm:mb-1 text-xl font-medium"> {title} </h2> 
                </div>
                <div className="flex flex-col items-center justify-center gap-2 ">
                    {/* Lien pour mener au details d'un article */}
                    <Link to={`/tutoriels/:${publicationInfo.id}`}>
                        <PublicationImage urlImage={publicationInfo.pubImage || '/essaieOldPublications/mockuuups-free-gaming-display-mockup.jpg'} />
                    </Link>
                </div>
                {/* Composant pour les details de la publication tel que le nombre des likes, de commentaires et de partages */}
                <PublicationDetails 
                    publicationId={publicationInfo.id || 0} 
                    likes={likeNumber}
                    setLikes={setLikeNumber}
                    comments={comments || 0}
                    setComments=""
                    shares={shares || 0}
                    setShares=""
                />
            </motion.div>
        </>
    );
}

export default Publication;
