// Importation de la methode createBrowserRouter a partir de react-router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importation de mes differentes composant qui seront ensuite passe au routeur de react-router-dom
import HomePage from './pages/homePage/HomePage'
import AboutPage from './pages/AboutPage/aboutPage'
import PortFolioPage from './pages/portfolioPage/portFolioPage'
import TutorialsPage from './pages/tutorialsPage/tutorialsPage'
import ContactPage from './pages/contactPage/contactPage'
import PublicationDetail from './pages/homePage/main/sectionRecentPublications/publicationDetail/publicationDetail'

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
    {
      // Details d'une publication
      path: '/tutoriels/:id',
      element: <PublicationDetail/>
    },
    
  ]
)

const App = () => {
    // Je retourne ce provider qui chargera mes differents composant en fonctions des differentes URLs
    return <RouterProvider router={router} />
}

export default App;
