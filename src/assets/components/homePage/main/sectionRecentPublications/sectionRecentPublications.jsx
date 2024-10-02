/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';
import Publication from '../../../generalAndPartialsComponents/publication/publication';
import NoRecentPublicationsMessage from './noRecentPublicationsMessage';
import Loader from '../../../generalAndPartialsComponents/loader';
import axios from 'axios';

// Bloc div pour les publications
const BlocPuclications = ({recentPublications, setRecentPublications,loader}) => {
    if (loader) {
        return <Loader/>
    } else if (recentPublications.length === 0) {
        return <NoRecentPublicationsMessage/>
    } 

    return (
        <div className='flex flex-col sm:flex-row relative top-[-80px] sm:top-[-40px] sm:flex-wrap gap-5 justify-center items-center'>
            {
                recentPublications.map ((pub) => (
                    // Chaque publication se trouve dans un lien fais avec la balise <Link> et c'est a partir de ce lien la que 
                    // je vais recuperer l'id passe en parametre de l'url afin d'afficher a l'utilisateur les details sur l'article
                    //  selectionne
                        <Publication key={pub.id}  publicationInfo={pub} setPublicationInfo={setRecentPublications} />
                    
                ))
            }
        </div>
    )
}



const SectionRecentPublications = () => {

    // Variable d'etat pour les publications recentes
    const [recentPublications, setRecentPublications] = useState([])
    // Variable d'etat pour gerer le loader
    const [loader, setLoader] = useState(true)

    // Je creer une fonction asyncrone pour fetcher les donnee, et je vais appeller cette fonction dans useEffet()
    const fetchRecentPub = async () => {
        // https://jsonplaceholder.typicode.com/posts
        axios.get ('https://jsonplaceholder.typicode.com/posts')
        .then ((response) => {
            const limitedData = []
            for (let i = 0; i < 6; i++) {
                limitedData.push (response.data[i])
            }
            setRecentPublications (limitedData)
        })
        .catch ((console.error()
        ))
        .finally (() => {
            setLoader (false)
        })
    }

    // J'utilise useEffect pour faire une requette a l'api au montage du composant, et le lui est passee un tableau des dependances
    // vide pour qu'il n'execute le callback que une seul fois
    useEffect (() => {
        fetchRecentPub ()
    },[])

    return (
        <>
            <section className="relative top-[780px] sm:top-[450px] p-14 bg-slate-100 pt-40 sm:pt-32">
                <div className="text-gray-900 flex flex-col items-center">
                    <motion.h1 className='text-principale text-2xl text-center w-96 sm:w-texteSectionParcour font-bold relative bottom-32  sm:bottom-24' >Regarde les dernières  <strong className="text-jaune opacity-90">publications </strong> faites pour toi</motion.h1>
                    <p className="text-center relative  top-[-110px] sm:top-[-80px] w-[320px] sm:w-full">As-tu raté mes derniers posts ? Je te récapitule</p>
                </div>
                {/* Bloc pour les publications */}
                <BlocPuclications recentPublications={recentPublications} setRecentPublications={setRecentPublications}  loader={loader} />
            </section>
        </>
    );
}

export default SectionRecentPublications;
