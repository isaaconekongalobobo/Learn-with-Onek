import Skill from "./asideComponents/skill";

const skills = {
    front: [
        {
          competence: "HTML",
          niveau: "Avancé",
          description: "Maîtrise des structures de base, des éléments sémantiques, de l'accessibilité et des bonnes pratiques HTML5."
        },
        {
          competence: "CSS",
          niveau: "Avancé",
          description: "Expertise dans la mise en page avec Flexbox, Grid, animations CSS, et la gestion de la compatibilité multi-navigateurs."
        },
        {
          competence: "JavaScript",
          niveau: "Avancé",
          description: "Compréhension approfondie des concepts de JS (ES6+), gestion des promesses, asynchrone, manipulation du DOM, etc."
        },
        {
          competence: "React",
          niveau: "Avancé",
          description: "Création d'applications interactives avec des composants réutilisables, gestion de l'état avec useState, useEffect, hooks."
        },
        {
          competence: "Tailwind.css",
          niveau: "Avancé",
          description: "Création des interfaces responsive et reutilisable avec le framework css Tailwind"
        },
        {
          competence: "Framer-motion",
          niveau: "Avancé",
          description: "Création  des animations fluide pour des projet reacts."
        },
        {
          competence: "Angular",
          niveau: "basique",
          description: "Développement d'applications avec Angular, utilisation des services, directives, et gestion de l'état avec NgRx."
        },
        {
          competence: "TypeScript",
          niveau: "Avancé",
          description: "Utilisation de TypeScript pour améliorer la robustesse du code JavaScript, typage statique et gestion des types complexes."
        },
        {
          competence: "Responsive Design",
          niveau: "Avancé",
          description: "Création de sites web adaptatifs et mobiles-first avec media queries, techniques de mise en page fluides, et outils comme Bootstrap."
        },
        {
          competence: "Testing",
          niveau: "Intermédiaire",
          description: "Tests unitaires et d'intégration avec des frameworks comme Jest, Mocha, et Cypress pour tester les applications frontend."
        },
        {
          competence: "UI/UX Design",
          niveau: "Intermédiaire",
          description: "Compétences de base en design d'interface utilisateur et expérience utilisateur, utilisation d'outils comme Figma ou Sketch pour la conception."
        },
    ]      
}

const Aside1 = () => {
    return (
        <aside className="w-64 p-2">
            <div>
                <h3 className="text-slate-800 font-medium text-xl ">Front-end</h3>
                <div className="text-slate-80 grid grid-cols-2 gap-4 " >
                    {
                        skills.front.map ((skill, index) => <Skill key={index} skill={skill}  /> )
                    }
                </div>
            </div>
        </aside>
    );
}

export default Aside1

