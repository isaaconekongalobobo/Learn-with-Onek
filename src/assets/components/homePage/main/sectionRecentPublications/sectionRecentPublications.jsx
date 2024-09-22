/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
import { useState } from 'react';
import Publication from '../../../generalAndPartialsComponents/publication/publication';
import NoRecentPublicationsMessage from './noRecentPublicationsMessage';



const SectionRecentPublications = ({publicationsTable}) => {
    // Je creer un Hook pour modifier le tableau des publications
    const [recentsPub, setRecentPub] = useState(publicationsTable)
    return (
        <>
            <section className="relative top-[950px] sm:top-[600px] p-14 bg-slate-100 pt-40 sm:pt-32">
                <div className="text-gray-900 flex flex-col items-center">
                    <motion.h1 className='text-principale text-2xl text-center w-96 sm:w-texteSectionParcour font-bold relative bottom-32  sm:bottom-24' >Regarde les dernières  <strong className="text-jaune opacity-90">publications </strong> faites pour toi</motion.h1>
                    <p className="text-center relative  top-[-110px] sm:top-[-80px] w-[320px] sm:w-full">As-tu raté mes derniers posts ? Je te récapitule</p>
                    <div className='flex flex-col sm:flex-row relative top-[-80px] sm:top-[-40px] sm:flex-wrap gap-5 justify-center'>
                        {/* Je fais un conditionnal rendering pour afficher un message au cas ou il n'y a aucune publications */}
                        {/* Si le tableau des posts est vide je rend le composant affichant un message a l'utilisateur */}
                        {/* Si non alors je map sur le tableau des publications et pour chaque publication j'appelle le composant <Publication> */}
                        {
                            
                            recentsPub.length ===0 ? <NoRecentPublicationsMessage/> : recentsPub.map (pub => <Publication key={pub.id} publicationInfo={pub} setPublicationInfo={setRecentPub} />)
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionRecentPublications;
