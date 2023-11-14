import Logo from './Logo'
import Link from 'next/link'
import data from '@/constants/navbar'
import useThemeSwitcher from '@/components/hooks/useThemeSwitcher'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { GithubIcon } from '@/icons/GithubIcon'
import { LinkedInIcon } from '@/icons/LinkedInIcon'
import { SunIcon } from '@/icons/SunIcon'
import { MoonIcon } from '@/icons/MoonIcon'
import { motion } from 'framer-motion'

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark 
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 dark:bg-light
            ${router.asPath === href ? 'w-full':'w-0'}`}>&nbsp;</span>
        </Link>
    )
}

const CustomMobileLink = ({href, title, className="", toggle}) => {
    const router = useRouter();
    
    const handleClick = () => {
        toggle();
        router.push(href);
    }

    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`h-[1px] inline-block bg-light 
            absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 dark:bg-dark
            ${router.asPath === href ? 'w-full':'w-0'}`}>&nbsp;</span>
        </button>
    )
}

const NavBar = () => {
    const [mode, setMode] = useThemeSwitcher();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const menuList = data.menu;
    const iconsList = data.icons;

    return (
        <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
            <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5
                    ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 
                    ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5
                    ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </button>
            
            <div className="w-full flex justify-between items-center lg:hidden">
                <nav>
                    {
                        menuList.map((menu) => (
                            <CustomLink key={menu.key} href={menu.href} title={menu.title} className={menu.classname}/>
                        ))
                    }
                </nav>
                <nav className="flex items-center justify-center flex-wrap">
                    {
                        iconsList.map((icon) => (
                            <motion.a key={icon.key} href={icon.path} target={"_blank"} 
                                whileHover={{y:-3}} whileTap={{scale:0.9}} className="w-6 mr-3">
                                    {icon.key === "github" ? <GithubIcon /> : icon.key === "linkedin" ? <LinkedInIcon /> : null}
                            </motion.a>
                        ))
                    }
                    
                    <button onClick = {() => {setMode(mode === 'light' ? 'dark' : 'light')}}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 
                            ${mode === 'light'?'bg-dark text-light' : 'bg-light text-dark'}`}>
                            
                        {mode === 'dark' ? <SunIcon className='fill-dark' /> : <MoonIcon className='fill-white' />}
                    </button>
                </nav>
            </div>

            {
                isOpen ? 
                    <motion.div initial={{scale:0, opacity:0, x:"-50%", y:"-50%"}} animate={{scale:1, opacity: 1}}
                        className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 
                        -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
                        <nav className="flex items-center flex-col justify-center">
                            {
                                menuList.map((menu) => (
                                    <CustomMobileLink key={menu.key} href={menu.href} title={menu.title} className="" toggle={handleClick}/>
                                ))
                            }
                        </nav>
                        <nav className="flex items-center justify-center flex-wrap mt-2">
                            <motion.a href={data.github} target={"_blank"} 
                                whileHover={{y:-3}} whileTap={{scale:0.9}} className="w-6 mr-3 sm:mx-1 bg-light rounded-full dark:bg-dark"><GithubIcon/></motion.a>
                            <motion.a href={data.linkedin} target={"_blank"}
                                whileHover={{y:-3}} whileTap={{scale:0.9}} className="w-6 mx-3 sm:mx-1"><LinkedInIcon/></motion.a>
                            
                            <button onClick = {() => {setMode(mode === 'light' ? 'dark' : 'light')}}
                                className={`ml-3 flex items-center justify-center rounded-full p-1 
                                    ${mode === 'light'?'bg-dark text-light' : 'bg-light text-dark'}`}>
                                    
                                {mode === 'dark' ? <SunIcon className='fill-dark' /> : <MoonIcon className='fill-white' />}
                            </button>
                        </nav>
                    </motion.div>
                : null
            }

            <div className="absolute left-[50%] top-2 translate-x-[-50%]">
                <Logo/>
            </div>
        </header>
    )
}

export default NavBar