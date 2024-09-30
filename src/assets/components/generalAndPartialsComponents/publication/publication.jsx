/* eslint-disable react/prop-types */
import { useState } from "react";
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
    return (
        <>
            <motion.div whileHover={{y:-15}} className="bg-principale p-[5%] w-[120%] sm:w-80 justify-between  sm:p-[2%] rounded-3xl flex flex-col gap-5 shadow-md"> 
                <div className="flex flex-col" >
                    <div className="flex gap-4">
                        <AuthorImage urlImage={publicationInfo.authorImage || '/Mes pics/isaac-speek.jpeg'} />
                        <div className="flex flex-col relative top-2">
                            <h2 className="text-white font-medium"> {publicationInfo.firstName || 'Isaac'} {publicationInfo.name || 'Onek'} </h2>                        
                            <p className="text-xs"> {publicationInfo.publicationdate} </p>
                        </div>  
                    </div>   
                </div>
                <div className="flex flex-col items-center justify-center gap-2 ">
                    <h2 className="ml-3 text-start"> { publicationInfo.title} </h2>               
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
