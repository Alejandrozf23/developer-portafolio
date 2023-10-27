import Head from 'next/head'
import Image from 'next/image'
import data from '@/constants/about'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

const AnimatedNumber = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000});
    const isInView = useInView(ref, {once: true});
    
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])
    
    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        }) 
    }, [springValue, value])

    return <span ref={ref}></span>
}

const Paragraph = () => {
    const paragraphList = data.about.biography.description;
    return (
        <>{
            paragraphList.map((pgraph) => (
                <p key={pgraph.id} className={pgraph.className}>{pgraph.paragraph}</p>
            ))
        }</>
    );
}

const Description = () => {
    const experienceList = data.about.biography.experience;

    return(
        <>{
            experienceList.map((exps) => (
                <div key={exps.number} className="flex flex-col items-end justify-center xl:items-center">
                    <span className="inline-block text-7xl font-bold md:text-6x1 sm:text-5x1 xs:text-4x1">
                        <AnimatedNumber value={exps.number}/>{exps.text}
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 
                        xl:text-center md:text-lg sm:text-base xs:text-sm">{exps.description}</h2>
                </div>
            ))
        }</>
    );
}

const about = () => {
    return(
       <>
            <Head>
                <title>{data.head.title}</title>
                <meta name={data.head.meta.name} content={data.head.meta.content}/>
            </Head>
            <TransitionEffect/>
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text={data.about.title} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4x1 sm:mb-8 "/>
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 ">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">{data.about.biography.title}</h2>
                            <Paragraph/>
                        </div>
                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark 
                            dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light"/>
                            <Image src={data.about.profile.picture} alt="Codebucks" width={768} height={1000} className="w-full h-auto rounded-2xl"
                                priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'/>                            
                        </div>
                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <Description/>
                        </div>
                    </div>
                    <Skills/>
                    <Experience/>
                    <Education/>
                </Layout>
            </main>
        </> 
    )
}

export default about