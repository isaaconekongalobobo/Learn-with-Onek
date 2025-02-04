/* eslint-disable react/prop-types */
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';
import Publication from '../../../../components/generalAndPartialsComponents/publication/publication';
import NoRecentPublicationsMessage from './noRecentPublicationsMessage';
import Loader from '../../../../components/generalAndPartialsComponents/loader';
import axios from 'axios';
import SecondaryButton from '../../../../components/generalAndPartialsComponents/secondaryButton';

// Bloc div pour les publications
const BlocPuclications = ({posts}) => {
    if (posts.length === 0) {
        return <NoRecentPublicationsMessage/>
    } else {
        return (
            <div className='grid grid-cols-4 xs:grid-cols-1 gap-5 px-16 xs:px-6'>
                {
                    posts.map ((post) => (
                        <Publication key={post.id}  post={post} />
                    ))
                }
            </div>            
        )
    }
}



const SectionRecentPublications = () => {

    const [ recentPosts, setRecentPost ] = useState([])
    const [loader, setLoader ] = useState(true)

    useEffect (() => {
        setLoader (true)
        axios.get (import.meta.env.VITE_GET_RECENTS_POSTS) 
       .then ((res) => setRecentPost (res.data))
       .catch ((error) => console.log ('Erreur lors de la requette', error))
       .finally (() => setLoader (false))
    },[])

    return (
        <>
            <section className="py-10 flex flex-col gap-16 xs:gap-10">
                <div className="text-gray-900 flex flex-col items-center gap-2 xs:gap-4">
                    <motion.h1 className='text-principale text-2xl text-center w-96 sm:w-texteSectionParcour font-bold ' >Regarde les dernières  <mark className="px-2 py-1 text-main-green">publications </mark> faites pour toi</motion.h1>
                    <h2 className="text-center ">As-tu raté mes derniers posts ? Je te récapitule</h2>
                </div>
                {loader ? <Loader/> : <BlocPuclications posts={ recentPosts }/> }
                {!loader && <div className='flex justify-center'><SecondaryButton text="Voir plus des publications" url="/tutoriels" /></div>}
            </section>
        </>
    );
}

export default SectionRecentPublications;
