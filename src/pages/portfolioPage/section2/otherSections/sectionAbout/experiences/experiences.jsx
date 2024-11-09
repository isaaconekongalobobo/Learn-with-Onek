import { motion } from 'framer-motion';
import ExperienceCard from './experienceCard';
const experiencesTable = [
    {
        poste: 'Développeur Web Full-Stack',
        entreprise: 'CRD/Enabel RD Congo Kinshasa',
        description: "J’ai porté le projet PME Market-place, qui est une plateforme de mise en relation entredes PMEs en RDC et les personnes ayant besoin de leurs services /produits.J’ai entre autres effectué les tâches suivantes :",
        responsabilities: [
            'Réalisation d’un pitch-deck et présentation du projet',
            'Réalisation d’un prototype (maquette) de l’UI avec Figma.',
            'Modélisation Conceptuelle, Logique et Physique des données.',
            'Conception d’une architecture C4 de l’application.',
            'Développement de la partie frontend avec Html, Css, JavaScript, React.js,TypeScript, Tailwind.css et Framer motion.',
            'Développent de la parties backend avec Node.js, Adonis.js, TypeScript et PostgreSQL',
        ],
        date: "D'août 2024 à Décembre 2024"
    },
    {
        poste: 'Développeur web',
        entreprise: 'Falcong-G technology',
        description: "En tant que développeur web au sein de Falcon-G Technology, une start-up innovante spécialisée dans  les solutions logicielles, j'ai participé activement à la conception, au développement et à l'optimisation de plusieurs projets web.",
        responsabilities: [
            'Conception et développement des applications web frontend',
            'Conception et développement des applications backend',
            'Modélisation et conception des bases de données et systèmes d’informations',
            'Développement des API REST'
        ],
        date: 'Depuis mars 2023',
    },
    {
        poste: 'Développeur & Designer web',
        entreprise: 'E-tech Service SARL',
        description: "Au cours de mon parcours au sein de Kadea Academy, j'ai travaillé sur le site web de l'entreprise E-tech Service SARL.",
        responsabilities: [
            'Modélisation Conceptuelle, Logique et Physique des données.',
            'Conception d’une architecture C4 de l’application.',
            'Développement de la partie frontend avec Html, Css, JavaScript, React.js,TypeScript, Tailwind.css et Framer motion.',
            'Développent de la parties backend avec Node.js, Adonis.js, TypeScript et PostgreSQL',
        ],
        date: 'Aout 2024',
    }
]
const ExperiencesSection = () => {
    return (
        <section>
        <div className="max-w-6xl mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Mes experiences</h2>
                <div className="w-20 h-1 bg-[#7ED218] mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {experiencesTable.map((experience, index) => (
                    <ExperienceCard key={index} experience={experience}/>
                ))}
            </div>
        </div>
        </section>
  );
}

export default ExperiencesSection