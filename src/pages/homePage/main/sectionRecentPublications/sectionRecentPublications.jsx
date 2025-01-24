/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';
import Publication from '../../../../components/generalAndPartialsComponents/publication/publication';
import NoRecentPublicationsMessage from './noRecentPublicationsMessage';
import Loader from '../../../../components/generalAndPartialsComponents/loader';
import axios from 'axios';
import SecondaryButton from '../../../../components/generalAndPartialsComponents/secondaryButton';

// Bloc div pour les publications
const BlocPuclications = ({recentPublications, setRecentPublications}) => {
    if(recentPublications.length === 0) {
        return <NoRecentPublicationsMessage/>
    } 
    return (
        <div className='flex flex-col sm:flex-row relative top-[-80px] sm:top-[-40px] sm:flex-wrap gap-5 justify-center items-center'>
            {
                recentPublications.map ((pub) => (
                    <Publication key={pub.id}  publicationInfo={pub} setPublicationInfo={setRecentPublications} />
                ))
            }
        </div>
    )
}



const SectionRecentPublications = () => {

    const [recentPublications, setRecentPublications] = useState([])
    const [loader, setLoader] = useState(true)

    const fetchRecentPub = async () => {
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
    useEffect (() => {
        fetchRecentPub ()
    },[])

    return (
        <>
            <section className="py-10 flex flex-col gap-16 xs:gap-10">
                <div className="text-gray-900 flex flex-col items-center gap-2 xs:gap-4">
                    <motion.h1 className='text-principale text-2xl text-center w-96 sm:w-texteSectionParcour font-bold ' >Regarde les dernières  <mark className="px-2 py-1 text-main-green">publications </mark> faites pour toi</motion.h1>
                    <h2 className="text-center ">As-tu raté mes derniers posts ? Je te récapitule</h2>
                </div>
                {loader? <Loader/> : <BlocPuclications recentPublications={recentPublications} setRecentPublications={setRecentPublications}  loader={loader} /> }
                {loader && <div className='flex justify-center'><SecondaryButton text="Voir plus des publications" url="/tutoriels" /></div>}
            </section>
        </>
    );
}

export default SectionRecentPublications;
