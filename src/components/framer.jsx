import React, {useState} from 'react'
import './framer.css'
import { motion } from 'framer-motion'


function Framer() {
const [isanimating, setIsAnimating] = useState(false) 

const boxVariant = {
  lion: {
    x: 1000,
    scale: 1.5,
    transition: {
      duration: 5, // Animation duration in seconds
      ease: 'easeInOut', // Easing function for the animation (e.g., 'easeInOut', 'linear', 'ease-in-out', etc.)
    },
  }
}





  return (


    <>   
     <div className='box_container'>
        <motion.div className="box"

        style = {{opacity: '0.1'}}

        animate={{
          x: isanimating ? 500 : 0,
       
          opacity: isanimating ? 1 : 0.5,
          rotate: isanimating ? 360 : 0
          
        }}

        transition={{
          type: "spring",
          stiffness: 200,
          damping: 75 
        }}

        onClick={() => setIsAnimating(!isanimating)}

        >
        </motion.div>




        <motion.div className="box2"
   
        whileHover={{
          scale: 1.1,
        }}
    
        whileTap={{
          scale: 0.9
        }}

        whileInView={{
          x: 400 ,
          transition: {
            duration: 3,
          },
        }}

        >
        </motion.div>

        <motion.div className="box3"
        variants={boxVariant}
        animate="lion"

        >
        </motion.div>
        </div> 
      </>
   
  )
}

export default Framer;