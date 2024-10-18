import Header from "../../components/generalAndPartialsComponents/header/header";

const PortFolioPage = () => {
    return (
        <>
            <body>
                {/* J'importe le composant <Header/> pour afficher les memes onglets que dans les 
                autres pages de mon site */}
                <Header/>
                <div className=''>
                    <img src="/sectionAboutIsaac/bg-about-isaac.jpg" alt="Initial isaac onek"  className='relative top-20 sm:top-0' />
                </div>
            </body>
        </>
    );
}

export default PortFolioPage;
