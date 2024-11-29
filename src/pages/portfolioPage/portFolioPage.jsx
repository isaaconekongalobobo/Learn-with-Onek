import Header from "../../components/generalAndPartialsComponents/header/header";
import Section1 from "./section1/section1";
import Section2 from "./section2/section2";

// const experiences = [
//     {
//         poste: 'Développeur Web Full-Stack',
//         entreprise: 'CRD/Enabel RD Congo Kinshasa, KN, Democratic Republic of the Congo',
//         description: "J’ai porté le projet PME Market-place, qui est une plateforme de mise en relation entredes PMEs en RDC et les personnes ayant besoin de leurs services /produits.J’ai entre autres effectué les tâches suivantes :",
//         responsabilities: [
//             'Réalisation d’un pitch-deck et présentation du projet',
//             'Réalisation d’un prototype (maquette) de l’UI avec Figma.',
//             'Modélisation Conceptuelle, Logique et Physique des données.',
//             'Conception d’une architecture C4 de l’application.',
//             'Développement de la partie frontend avec Html, Css, JavaScript, React.js,TypeScript, Tailwind.css et Framer motion.',
//             'Développent de la parties backend avec Node.js, Adonis.js, TypeScript et PostgreSQL',
//         ],
//         date: "D'août 2024 à novembre 2024"
//     },
//     {
//         poste: 'Développeur web',
//         entreprise: 'Falcong-G technology',
//         description: '',
//         responsabilities: [
//             'Conception et développement des applications web frontend',
//             'Conception et développement des applications backend',
//             'Modélisation et conception des bases de données et systèmes d’informations',
//             'Développement des API REST'
//         ],
//         date: 'Depuis mars 2023 Falcon-G technology Kinshasa',
//     }
// ]

const PortFolioPage = () => {
    return (
        <div className="flex flex-col gap-[4rem] sm:gap-[5rem]  ">
            <Header/>
            <main className="">
                <Section1/>
                <Section2/>
            </main>
                {/* <div className=''>
                    <img src="/sectionAboutIsaac/bg-about-isaac.jpg" alt="Initial isaac onek"  className='relative top-20 sm:top-0' />
                </div> */}
        </div>
    );
}

export default PortFolioPage;
