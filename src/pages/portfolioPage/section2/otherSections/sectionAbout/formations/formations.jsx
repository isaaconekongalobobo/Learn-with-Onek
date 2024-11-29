import { motion } from 'framer-motion';
import {FormationCard} from './formationCard'
const formationTable = [
  {
    id: 1,
    title: 'Certification SIMPLON (BAC+2)',
    description: 'Formation en développement web & web mobile',
    school: 'Kadea Academy',
    schoolWebsite: 'https://www.kadea.academy/formations/dev-web/?city=kinshasa',
    date: 'Décembre 2024'
  },
  {
    id: 3,
    title: 'Développement web Django',
    description: 'Formation en développement web avec Django',
    school: 'Orange Digital Center',
    schoolWebsite: 'https://engageforchange.orange.com/fr/country/cd#our-programs',
    date: 'Aout 2023'
  },
  {
    id: 2,
    title: 'Certification Développeur web',
    description: 'Formation en développement web Php',
    school: 'Open Group Innovation',
    schoolWebsite: 'https://opengroupinnovation.com/apropos.php#',
    date: 'juille 2023'
  }
];

const FormationSection = () => {
    return (
        <section>
          <div className="max-w-6xl mx-auto px-4">
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
              >
              <h2 className="text-xl font-bold text-gray-800 mb-4">Mon Parcours de Formation</h2>
              <div className="w-20 h-1 bg-[#7ED218] mx-auto rounded-full"></div>
              </motion.div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {formationTable.map((formation, index) => (
                  <motion.div
                  key={formation.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  >
                  <FormationCard formation={formation} />
                  </motion.div>
              ))}
              </div>
          </div>
        </section>
  );
}

export default FormationSection