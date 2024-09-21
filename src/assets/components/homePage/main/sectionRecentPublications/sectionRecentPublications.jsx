/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
import { useState } from 'react';
import Publication from '../../../generalAndPartialsComponents/publication/publication';


const SectionRecentPublications = ({publicationsTable}) => {
    // Je creer un Hook pour modifier le tableau des publications
    const [recentsPub, setRecentPub] = useState(publicationsTable)
    return (
        <>
            <section className="relative top-[950px] sm:top-[600px] p-14">
                <div className="text-gray-900 flex flex-col items-center">
                    <motion.h1 className='text-principale text-3xl text-center w-96 sm:w-texteSectionParcour font-bold relative bottom-32  sm:bottom-24' >Regarde les dernières  <strong className="text-jaune opacity-90">publications </strong> faites pour toi</motion.h1>
                    <p className="text-center relative top-[-120px] sm:top-[-80px] w-[320px] sm:w-full">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <div>
                        {
                            recentsPub.map ((pub) => (
                                <Publication key={pub.id} publicationInfo={pub} setPublicationInfo={setRecentPub} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionRecentPublications;
