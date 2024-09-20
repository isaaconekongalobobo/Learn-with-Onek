// Importation de la methode createBrowserRouter a partir de react-router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importation de mes differentes composant qui seront ensuite passe au routeur de react-router-dom
import HomePage from './assets/components/homePage/HomePage'
import AboutPage from './assets/components/AboutPage/aboutPage'
import PortFolioPage from './assets/components/portfolioPage/portFolioPage'
import TutorialsPage from './assets/components/tutorialsPage/tutorialsPage'
import ContactPage from './assets/components/contactPage/contactPage'

// Je cree un routeur pour y enregistrer toutes les URLs de mon application
const router = createBrowserRouter (
  [
    // Definition des differentes routes
    {
      // Page d'acceuil
      path: '/',
      element: <HomePage/>
    },
    {
      // Page A propos
      path: '/about',
      element: <AboutPage/>
    },
    {
      // Page Portfolio
      path: '/portfolio',
      element: <PortFolioPage/>
    },
    {
      // Page Tutoriels
      path: '/tutoriels',
      element: <TutorialsPage/>
    },
    {
      // Page Contacts
      path: '/contact',
      element: <ContactPage/>
    },
    
  ]
)

const App = () => {
    // Je retourne ce provider qui chargera mes differents composant en fonctions des differentes URLs
    return <RouterProvider router={router} />
}

export default App;
