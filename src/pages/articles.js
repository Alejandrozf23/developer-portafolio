import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import data from '@/constants/articles'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

const FramerImage = motion(Image);

const MovingImg = ({title, img, link}) => {
    
    const x =  useMotionValue(0);
    const y =  useMotionValue(0);
    const imgRef = useRef(null);
    
    function handleMouse(event){
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event){
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0);
    }


    return (
        <Link href={link} target="_blank" onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className="capitalize text-x1 font-semibold hover:underline">{title}</h2>
            <FramerImage style={{x:x, y:y}} width={200} height={100}
                initial={{opacity:0}}
                whileInView={{opacity:1, transition:{duration:0.2}}}                
                ref={imgRef} src={img} alt={title} 
                className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"/>
        </Link>
    )
}

const Article = ({img, title, date, link}) => {
    return(
        <motion.li 
            initial={{y:200}}
            whileInView={{y:0, transition:{duration:0.5, ease:"easeInOut"}}}
            viewport={{once:true}}
            className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center 
            justify-between bg-light text-dark first:mt-0 border border-solid border-dark
            border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
            sm:flex-col">
            <MovingImg title={title} img={img} link={link} width={200} height={100}/>
            <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">{date}</span>
        </motion.li>
    )
}

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
            <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl"/>
            <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg">
                <FramerImage src={img} alt={title} className="w-full h-auto" width={200} height={100}
                    whileHover={{scale:1.05}}
                    transition={{duration:0.2}}
                    priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2x1 font-bold my-2 mt-4 hover:underline xs:text-lg">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold dark:text-primaryDark">{time}</span>
        </li>
    )
}

const articles = () => {
    const articlesList = data.articles;

    return (
        <>
            <Head>
                <title>Article page</title>
                <meta name="description" content="any description"/>
            </Head>
            <TransitionEffect/>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Words can change the world!" className="mb-16 lg:!text-7x1 sm:mb-8 sm:!text-6x1 xs:!text-4x1"/>
                    <ul className="grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16">
                        {
                            articlesList.map((article) => {
                                if (article.feature) {
                                    return (
                                        <FeaturedArticle key={article.id}
                                            title={article.title}
                                            summary={article.summary}
                                            time={article.time}
                                            link={article.link}
                                            img={article.img} />
                                    )
                                } 
                            })
                        }
                    </ul>
                    <h2 className="font-bold text-4x1 w-full text-center my-8 mt-16">All articles</h2>
                    <ul>
                        {
                            articlesList.map((article) => {
                                if (!article.feature) {
                                    return (
                                        <Article key={article.id}
                                            title={article.title}
                                            date={article.date}
                                            link={article.link}
                                            img={article.img}/>
                                    )
                                } 
                            })
                        }
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles