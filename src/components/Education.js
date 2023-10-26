import LiIcon from './LiIcon'
import data from '@/constants/education'
import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

const Details = ({type, time, place, link, info}) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type:"spring"}}>
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}&nbsp;
                    <a href={link} target="_blank" className="text-primary capitalize dark:text-primaryDark">@{place}</a>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {place}
                </span>
                <p className="font-medium w-full md:text-sm">{info}</p>
            </motion.div>
        </li>
    );
}

const Education = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    
    const educationList = data.education;

    return(
        <div className="my-32">
            <h2 className="font-bold text-8x1 mb-8 w-full text-center md:text-6x1 xs:text-4x1 md:mb-4">Education</h2>
            <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 w-[4px] 
                    h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    {
                        educationList.map((detail) => (
                            <Details type={detail.type} time={detail.time} place={detail.place} link={detail.link} info={detail.info}/>
                        ))
                    }                    
                </ul>
            </div>
        </div>
    )
}

export default Education