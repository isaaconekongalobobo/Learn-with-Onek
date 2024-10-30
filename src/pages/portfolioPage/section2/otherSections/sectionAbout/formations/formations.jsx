import ItemFormation from "./itemFormation";
import {motion} from 'framer-motion'
// Tableau stockant toute les formations
const allFormation = [
    {
        id: 0,
        formation: "Formation en Developpement web et mobile (SIMPLON BAC+2)",
        description: "Depuis avril 2024,Kadea Academy,Kinshasa RD congo"
    },
    {
        id: 1,
        formation: "Formation en Developpement web et mobile (SIMPLON BAC+2)",
        description: "Depuis avril 2024,Kadea Academy,Kinshasa RD congo"
    },
    {
        id: 2,
        formation: "Formation en Developpement web et mobile (SIMPLON BAC+2)",
        description: "Depuis avril 2024,Kadea Academy,Kinshasa RD congo"
    },
]

const ulVariant= {
    hidden: {
        opacity: 0,
        y:-10,
    },
    visible: {
        opacity: 1,
        y:1,
        transition: {
            delay: 0.5
        }
    }
}
const Formations = () => {
    return (
        <details className="">
            <summary className="cursor-pointer text-lg text-[#1B4D3E] bg-slate-200 w-1/6 p-2 pl-5 rounded-full">Formations</summary>
            <motion.ul 
            variants={ulVariant} 
            initial="hidden" 
            whileInView="visible" 
            className="list-disc p-5 flex flex-col gap-5">
                {
                    allFormation.map ((formation) => (
                        <ItemFormation key={formation.id} text={formation.formation} moreDetails={formation.description} />
                    ))
                }
            </motion.ul>
        </details>   
    );
}

export default Formations;
