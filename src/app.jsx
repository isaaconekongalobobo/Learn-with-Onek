// Importation de la methode createBrowserRouter a partir de react-router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Importation de mes differentes composant qui seront ensuite passe au routeur de react-router-dom
import HomePage from './pages/homePage/HomePage'
import AboutPage from './pages/AboutPage/aboutPage'
import PortFolioPage from './pages/portfolioPage/portFolioPage'
import TutorialsPage from './pages/tutorialsPage/tutorialsPage'
import ContactPage from './pages/contactPage/contactPage'
import PublicationDetail from './pages/homePage/main/sectionRecentPublications/publicationDetail/publicationDetail'
import ChatbotPage from './pages/chatbotPage/chatbotPage'
import LoginPage from './pages/loginPage/loginPage'
import SignInPage from './pages/signInPage/signInPage'

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
    // Page pour le chatbot
    {
      path: '/chatbot',
      element: <ChatbotPage/>
    },
    {
      // Details d'une publication
      path: '/tutoriels/:id',
      element: <PublicationDetail/>
    },
    {
      path: '/login',
      element: <LoginPage/>
    },
    {
      path: '/signIn',
      element: <SignInPage/>
    },
    {
      path: '/newsletters',
      element: ''
    }
    
  ]
)

const App = () => {
    // Je retourne ce provider qui chargera mes differents composant en fonctions des differentes URLs
    return <RouterProvider router={router} />
}

export default App;
