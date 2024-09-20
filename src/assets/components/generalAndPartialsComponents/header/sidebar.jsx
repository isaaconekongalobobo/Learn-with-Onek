'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { X, Menu, Home, User, Briefcase, BookOpen, Mail } from 'lucide-react'

const tabs = [
  { name: 'Accueil', icon: Home },
  { name: 'A propos', icon: User },
  { name: 'Mon portfolio', icon: Briefcase },
  { name: 'Tutoriels', icon: BookOpen },
  { name: 'Contact', icon: Mail },
]

export default function ResponsiveSidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className="relative sm:hidden">
      {/* Toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 right-4 z-20 p-2 bg-primary text-primary-foreground rounded-full shadow-lg"
        aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <motion.div
        className="fixed top-0 right-0 h-full w-64 bg-background shadow-lg z-10"
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <nav className="flex flex-col h-full pt-16">
          {tabs.map((tab) => (
            <motion.a
              key={tab.name}
              href={`#${tab.name.toLowerCase()}`}
              className="flex items-center px-6 py-4 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
              whileHover={{ x: 5 }}
              onClick={() => setIsOpen(false)}
            >
              <tab.icon className="mr-4" size={20} />
              {tab.name}
            </motion.a>
          ))}
        </nav>
      </motion.div>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}