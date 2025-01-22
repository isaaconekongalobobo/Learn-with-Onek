/* eslint-disable react/prop-types */
'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp, FaAngular, FaGitAlt, FaGithub, FaDocker, FaLinux, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiFramer, SiExpress, SiAdonisjs, SiTypescript, SiDjango, SiPostgresql, SiMysql, SiFirebase, SiMongodb, SiCanva } from 'react-icons/si';
import Frontend from './frontend';
import Backend from './backend';

const skills = [
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'React.js', icon: FaReact, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
  { name: 'Framer Motion', icon: SiFramer, color: 'text-purple-500' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-gray-500' },
  { name: 'Adonis.js', icon: SiAdonisjs, color: 'text-purple-600' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
  { name: 'PHP', icon: FaPhp, color: 'text-indigo-400' },
  { name: 'Django', icon: SiDjango, color: 'text-green-600' },
  { name: 'Angular', icon: FaAngular, color: 'text-red-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-700' },
  { name: 'Docker', icon: FaDocker, color: 'text-blue-500' },
  { name: 'Linux', icon: FaLinux, color: 'text-yellow-600' },
  { name: 'Figma', icon: FaFigma, color: 'text-purple-400' },
  { name: 'Canva', icon: SiCanva, color: 'text-blue-400' },
];

const buttonVariant = {
  hidden: {},
  visible: {
    backgroundColor: ['#3B82F6', '#10B981', '#6366F1', '#EC4899'],
    transition: { duration: 4, repeat: Infinity }
  },
  whenHover: { scale: 1.05 },
  whenTap: { scale: 1.05 },
}
const animatePresenceVariant = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
  transition: { duration: 0.5 }
}

const SkillIcon = ({ skill, index, isVisible, totalSkills }) => {
  const Icon = skill.icon
  // Recuperation de la taille de l'ecrant
  const screenWidth = window.screen.width;
  if (!Icon) return null;

  const angle = (index / totalSkills) * 16 * Math.PI;
  
  // Ajustement du perimetre du cercle en fonction de la taille de l'ecrant
  const radius =  screenWidth < 600? 120 : 200;

  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        x: isVisible ? x : 0,
        y: isVisible ? y : 0
      }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1 }}
      className="absolute flex flex-col items-center justify-center"
      style={{ 
        width: '60px', 
        height: '60px',
        transform: `translate(${x}px, ${y}px)`
      }}
    >
      <Icon className={` text-[20px] sm:text-[40px] ${skill.color}`} />
    </motion.div>
  );
};

const Competences = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Mes compétences Techniques</h2>
        <div className="w-20 h-1 bg-[#7ED218] mx-auto rounded-full"></div>
      </motion.div>

      <div className='flex flex-col sm:flex-row gap-2 justify-between p-8'>
        {/* Frontend(pour la version pc) */}
        <div className='hidden sm:block'>
            <Frontend/>
        </div>
        

        {/* Button and Skils icons */}
        <div className="flex justify-center items-center sm:relative sm:top-[-60px] z-10">

          {/* Bouton */}
          <motion.button variants={buttonVariant} whileHover="whenHover" whileTap="whenTap" animate="visible"
            onClick={() => setIsOpen(!isOpen)}
            className="p-5 size-24 font-semibold text-white rounded-full shadow-lg focus:outline-none relative top-7"
          >
            {isOpen ? 'Reduire' : 'Skills'}
          </motion.button>

          {/* Cercle des icones */}
          <AnimatePresence>
            {isOpen && (
              <motion.div variants={animatePresenceVariant} initial="initial" animate="animate" exit="exit" transition="transition"
              className='relative right-20'  >
                {skills.map((skill, index) => (
                  <SkillIcon key={skill.name} skill={skill} index={index} isVisible={isOpen} totalSkills={skills.length}/>
                ))}
              </motion.div>
            )}
          </AnimatePresence>        
        </div>   

        <div className='relative sm:static top-32 text-center' >
          {/* Frontend (pour la version mobile) */}
          <div className='sm:hidden'>
            <Frontend/> 
          </div>  

          {/* Backend */}
          <Backend/>      
        </div>
      </div>


    </section>

  );
}

export default Competences