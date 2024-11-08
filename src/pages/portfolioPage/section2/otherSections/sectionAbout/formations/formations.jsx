import {motion} from 'framer-motion'
import ItemFormation from './itemFormation';

const formationTable = [
    {
        id:1,
        title: 'Certification SIMPLON (BAC+2)',
        description: 'Formation en développement web & web mobile',
        school:'Kadea Academy',
        schoolWebsite:'https://www.kadea.academy/formations/dev-web/?city=kinshasa',
        date:'Décembre 2024'
    },
    {
        id:3,
        title: 'Développement web Django',
        description: 'Formation en développement web avec Django',
        school:'Orange Digital Center',
        schoolWebsite:'https://engageforchange.orange.com/fr/country/cd#our-programs',
        date:'Aout 2023'
    },
    {
        id:2,
        title: 'Certification Développeur web',
        description: 'Formation en développement web Php',
        school:'Open Group Innovation',
        schoolWebsite:'https://opengroupinnovation.com/apropos.php#',
        date:'juille 2023'
    },
]
const blocVariant = {
    hidden: {
        opacity:0,
        x: -20,
    },
    visible: {
        opacity:1,
        x:0,
    }
}

const Formations = () => {
    return (
        <motion.div className='sm:p-5 flex flex-col gap-5' >
            <h2 className='text-[#1E293B] font-medium text-xl '>Formations</h2>
            <motion.div className='flex flex-col sm:gap-5' variants={blocVariant} initial="hidden" animate="visible">
                {
                    formationTable.map ((formation) => (
                        <ItemFormation key={formation.id} title={formation.title} description={formation.description} school={formation.school} schollWebsite={formation.schoolWebsite} date={formation.date} />
                    ))
                }                
            </motion.div>
        </motion.div>
    );
}

export default Formations;
