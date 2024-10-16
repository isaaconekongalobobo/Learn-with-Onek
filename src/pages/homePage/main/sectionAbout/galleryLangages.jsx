// J'importe framer motion 
import { motion } from "framer-motion"
import Html from "./languagesIcons/html"
import Css from "./languagesIcons/css"
import JavaScript from "./languagesIcons/javaScript"
import React from "./languagesIcons/react"
import NodeJs from "./languagesIcons/nodeJs"
import Php from "./languagesIcons/php"
import { NavLink } from "react-router-dom"


// Variant pour l'animation des icones 
const allIconsVariant = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
    }
  }

const iconsStyle = "size-24 sm:size-32"

  
const GalleryLangages = () => {
    return (
        <>
            <motion.div className=" size- grid grid-cols-3 sm:grid-cols-1 tablet:grid-cols-3 xl:grid-cols-3 gap-3.5 px-4 py-3 " variants={allIconsVariant} initial="hidden" whileInView="visible" >
              <NavLink to="/tutoriels/module/:html" >
                <Html style={iconsStyle}/>
              </NavLink>
              <NavLink to="/tutoriels/module/:css" >
                <Css style={iconsStyle} />
              </NavLink>
              <NavLink to="/tutoriels/module/:js" >
                <JavaScript style={iconsStyle} />
              </NavLink>
              <NavLink to="/tutoriels/module/:react" >
                <React style={iconsStyle} />
              </NavLink>
              <NavLink to="/tutoriels/module/:node.js" >
                <NodeJs style={iconsStyle} />
              </NavLink>
              <NavLink to="/tutoriels/module/:php" >
                <Php style={iconsStyle} />
              </NavLink>                    
            </motion.div>
        </>
    )
}

export default GalleryLangages