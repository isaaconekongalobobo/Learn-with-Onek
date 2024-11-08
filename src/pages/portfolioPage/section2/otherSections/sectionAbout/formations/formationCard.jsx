/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building2, Globe } from 'lucide-react';

export const FormationCard = ({formation}) => {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.02 }}>
          <div className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 group-hover:shadow-xl">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-[1rem] font-medium text-gray-800 mb-2">{formation.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Building2 className="w-4 h-4 mr-2 text-[#7ED218]" />
                    <a
                      href={formation.schoolWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-500 transition-colors"
                    >
                      {formation.school}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-[#7ED218]" />
                    <span>{formation.date}</span>
                  </div>
                </div>
              </div>
              <GraduationCap className="w-8 h-8 text-[#7ED218]" />
            </div>
    
            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileHover={{ opacity: 1, scale: 1 }}
              className="absolute left-0 right-0 -bottom-2 translate-y-full opacity-0 group-hover:opacity-100 z-10 transition-opacity"
            >
              <div className="bg-white rounded-lg shadow-xl p-4 mx-4 border border-gray-100">
                <p className="text-gray-600">{formation.description}</p>
                <div className="mt-3 flex items-center text-sm">
                  <Globe className="w-4 h-4 mr-2 text-[#7ED218]" />
                  <a
                    href={formation.schoolWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1B4D3E] hover:underline"
                  >
                    Visiter le site
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      );
}

