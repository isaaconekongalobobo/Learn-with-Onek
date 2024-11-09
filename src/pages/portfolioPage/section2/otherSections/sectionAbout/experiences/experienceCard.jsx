/* eslint-disable react/prop-types */
'use client'

import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2} from 'lucide-react';


const ExperienceCard = ({ experience }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} 
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-medium text-gray-800 mb-2">{experience.poste}</h3>
          <div className="space-y-2">
            <div className="flex items-center text-gray-600">
              <Building2 className="w-4 h-4 mr-2 text-[#7ED218]" />
              <span>{experience.entreprise}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-4 h-4 mr-2 text-[#7ED218]" />
              <span>{experience.date}</span>
            </div>
          </div>
        </div>
        <Briefcase className="w-8 h-8 text-[#7ED218]" />
      </div>

      {experience.description && (
        <p className="text-gray-600 mb-4">{experience.description}</p>
      )}

      {experience.responsabilities.length > 0 && (
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Responsabilités :</h4>
          <ul className="list-disc pl-5 mb-4 text-sm text-gray-600">
            {experience.responsabilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}

export default ExperienceCard