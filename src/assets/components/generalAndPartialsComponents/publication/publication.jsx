/* eslint-disable react/prop-types */
import { useState } from "react";
import AuthorImage from "./authorImage";
import PublicationDetails from "./publicationdetails/publicationDetails";
import PublicationImage from "./publicationImage";

// J'importe framer motion
import {motion} from 'framer-motion'

const Publication = ({publicationInfo, setPublicationInfo}) => {
    // Je creer des hook pour modifier les informations d'une publication
    const [likes] = useState(publicationInfo.likes)
    const [comments] = useState(publicationInfo.comments)
    const [shares] = useState(publicationInfo.shares)
    return (
        <>
            <motion.div whileHover={{y:-15}} className="bg-principale p-5 rounded-3xl flex flex-col gap-5 shadow-md"> 
                <div className="flex flex-col" >
                    <div className="flex gap-4">
                        <AuthorImage urlImage={publicationInfo.authorImage || '/Mes pics/isaac-speek.jpeg'} />
                        <div className="flex flex-col relative top-2">
                            <h2 className="text-white font-medium"> {publicationInfo.firstName || 'Isaac'} {publicationInfo.name || 'Onek'} </h2>                        
                            <p className="text-xs"> {publicationInfo.publicationdate} </p>
                        </div>  
                    </div>   
                    <h2 className="text-wrap w-80 pt-3 sm:pt-2 text-white font-bold text-xl"> {publicationInfo.title} </h2>               
                </div>
                <div className="flex items-center justify-center">
                    <PublicationImage urlImage={publicationInfo.pubImage || '/essaieOldPublications/mockuuups-free-gaming-display-mockup.jpg'} />
                </div>
                {/* Composant pour les details de la publication tel que le nombre des likes, de commentaires et de partages */}
                <PublicationDetails 
                    publicationId={publicationInfo.id || 0} 
                    likes={likes || 0}
                    setLikes={setPublicationInfo}
                    comments={comments}
                    setComments=""
                    shares={shares}
                    setShares=""
                />
            </motion.div>
        </>
    );
}

export default Publication;
