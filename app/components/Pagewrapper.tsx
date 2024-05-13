'use client'


import {motion} from 'framer-motion'
const Pagewrapper = ({
    children,
    className
}: {
    children: React.ReactNode,
    className?: string
}) => {
  return (
    <motion.section
    className={className}
    initial={{ opacity: 1}}
    animate={{ opacity: 1}}
    exit={{ opacity: 0}}
    transition={{ duration: 0.5 }}
    >{children}</motion.section>
  )
}

export default Pagewrapper