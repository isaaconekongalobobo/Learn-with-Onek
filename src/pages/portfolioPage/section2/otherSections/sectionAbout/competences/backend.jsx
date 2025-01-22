import Skill from "./asideComponents/skill";

const skills = {
    Backend : [
        {
          competence: "Node.js",
          niveau: "Avancé",
          description: "Développement d'applications backend en JavaScript avec Node.js, gestion des requêtes HTTP, et utilisation de modules pour la gestion des serveurs et des API."
        },
        {
          competence: "Express.js",
          niveau: "Avancé",
          description: "Framework minimaliste pour Node.js permettant de gérer les routes, la gestion des middlewares, la gestion des erreurs et la construction d'API REST."
        },
        {
            competence: "Adonis.js",
            niveau: "Avancé",
            description: "Framework Node.js utilisant le type script pour creer des application robuste avec le javaScript."
        },
        {
          competence: "PHP",
          niveau: "Avancé",
          description: "Langage de programmation pour le développement web backend, avec des connaissances en gestion de bases de données, manipulation des sessions, et création d'API REST."
        },
        {
          competence: "Django",
          niveau: "Avancé",
          description: "Framework Python pour le développement d'applications web rapides et sécurisées, avec une architecture MVC, ORM intégré, et une large gamme de bibliothèques tierces."
        },
        {
          competence: "API REST",
          niveau: "Avancé",
          description: "Création d'APIs REST avec Node.js, PHP, ou Django, gestion des routes, des méthodes HTTP (GET, POST, PUT, DELETE), et gestion de la sécurité (CORS, authentification)."
        },
        {
          competence: "Bases de données relationnelles (MySQL, PostgreSQL)",
          niveau: "Avancé",
          description: "Connaissance approfondie des bases de données relationnelles, création de schémas, gestion des requêtes SQL, optimisation des performances et gestion des migrations avec des ORM comme Sequelize (Node.js), Eloquent (PHP), ou Django ORM."
        },
        {
          competence: "Bases de données NoSQL (MongoDB)",
          niveau: "Intermédiaire",
          description: "Utilisation des bases de données NoSQL comme MongoDB pour des applications à fort volume de données non structurées, gestion des collections et documents, et intégration avec Node.js via Mongoose."
        },
        {
          competence: "Authentification et sécurité (JWT, OAuth)",
          niveau: "Avancé",
          description: "Mise en place de mécanismes d'authentification et d'autorisation sécurisés dans les applications backend via JSON Web Tokens (JWT), OAuth, gestion des sessions utilisateurs, et prévention des attaques comme le CSRF et le XSS."
        },
        {
          competence: "Gestion des environnements (dotenv)",
          niveau: "Avancé",
          description: "Gestion des variables d'environnement pour configurer l'application en fonction des différents environnements (développement, production) via des outils comme dotenv."
        },
      ]
}

const Backend = () => {
    return (
        <aside className="w-64 p-2">
            <div>
                <h3 className="text-slate-800 font-medium text-xl ">Back-end</h3>
                <div className="text-slate-80 grid grid-cols-2 gap-4 ">
                    {
                        skills.Backend.map ((skill, index) => <Skill key={index} skill={skill}  /> )
                    }
                </div>
            </div>
        </aside>
    );
}

export default Backend

