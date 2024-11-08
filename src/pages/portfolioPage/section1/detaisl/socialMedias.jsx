'use client'

import { motion } from 'framer-motion'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

const socialMedias = [
  { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/isaaconek?igsh=b2Rrb20zbWc5ajV6&utm_source=qr' },
  { name: 'LinkedIn', icon: FaLinkedin, url: 'https://www.linkedin.com/in/isaac-onek-825b23262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { name: 'X', icon: FaTwitter, url: 'https://x.com/Isaac_Onek_Dev' },
  { name: 'GitHub', icon: FaGithub, url: 'https://github.com/isaaconekongalobobo' },
]

export default function SocialMediaButtons() {
  return (
    <div className="flex space-x-6 items-center">
      {socialMedias.map((social) => (
        <motion.a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer"
          className="p-3 rounded-full bg-white border-2 border-white shadow-lg hover:shadow-xl transition-shadow duration-300"
          whileHover={{ 
            scale: 1.2,
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            whileHover={{ 
              rotate: 360,
              transition: { duration: 0.5 }
            }}
          >
            <social.icon className="size-5 text-[#1E293B] hover:text-[#7ED218]" />
          </motion.div>
        </motion.a>
      ))}
    </div>
  )
}