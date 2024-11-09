/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Skill = ({skill}) => {

    // Conversion du niveau allant de la chaine au chiffre
    let level;
    switch (skill.niveau) {
        case "Avancé":
            level = 100
            break;
        case "Intermédiaire" :
            level = 70
            break;
        case "basique" :
            level = 40
            break;
    
        default:
            level = 0
            break;
    }

    const [currentLevel, setCurrentLevel] = useState(0)

    useEffect(() => {
      const timer = setTimeout(() => {
        if (currentLevel < level) {
          setCurrentLevel(prev => Math.min(prev + 1, level))
        }
      }, 20)
  
      return () => clearTimeout(timer)
    }, [currentLevel, level])
  
    return (
      <div className="w-full max-w-sm mx-auto mt-8">
        <div className="mb-2 flex justify-between">
          <span className="text-sm font-medium text-gray-700">{skill.competence}</span>
        </div>
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#7ED218]"
            initial={{ width: 0 }}
            animate={{ width: `${currentLevel}%` }}
            transition={{ type: "spring", stiffness: 10, damping: 10 }}
          />
        </div>
      </div>
    )
}

export default Skill;
