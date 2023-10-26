import React from 'react';
import Image from "next/image";
import FastMarquee from 'react-fast-marquee';
import angular from "@/images/skills/Angular.png"
import spring from "@/images/skills/Spring.png"
import c from "@/images/skills/C++.png"
import firebase from "@/images/skills/Firebase.png"
import java from "@/images/skills/Java.png"
import javascript from "@/images/skills/Javascript.png"
import django from "@/images/skills/Django.png"
import php from "@/images/skills/PHP.png"
import python from "@/images/skills/Python.png"
import react from "@/images/skills/React.png"
import tailwind from "@/images/skills/Tailwind.png"
import nextjs from "@/images/skills/Nextjs.png"
import oracle from "@/images/skills/Oracle.png"
import mongodb from "@/images/skills/Mongo.png"
import redis from "@/images/skills/Redis.png"
import docker from "@/images/skills/Docker.png"
import kubernates from "@/images/skills/Kubernates.png"
import kafka from "@/images/skills/Kafka.png"
import confluent from "@/images/skills/Confluent.png"
import aws from "@/images/skills/AWS.png"


const ImageSkills = ({src}) => {
    return (
        <Image src={src} alt={src} width={100} height={100}
            className='rounded-2xl hover:scale-110 cursor-pointer 
            transition-all duration-300 ease-in-out object-cover object-center'/>
    );
}

const Skills = () => {
    return(
        <>            
            <div className="my-32">
                <h2 className="font-bold text-8x1 mb-8 w-full text-center md:text-6x1 xs:text-4x1 md:mb-4">Tech Skills</h2>
                <div className='mt-0'>
                    <FastMarquee speed={75} direction="right" gradientColor={['red', 'blue']}>
                        <div className='flex items-center xs:gap-[50px] gap-[80px] xs:mr-[50px] mr-[80px] w-auto'>
                            <ImageSkills src={java}/>
                            <ImageSkills src={python}/>
                            <ImageSkills src={c}/>
                            <ImageSkills src={php}/>
                            <ImageSkills src={javascript}/>

                            <ImageSkills src={angular}/>
                            <ImageSkills src={react}/>
                            <ImageSkills src={tailwind}/>
                            <ImageSkills src={nextjs}/>

                            <ImageSkills src={spring}/>
                            <ImageSkills src={django}/>
                            
                            <ImageSkills src={oracle}/>
                            <ImageSkills src={firebase}/>
                            <ImageSkills src={mongodb}/>
                            <ImageSkills src={redis}/>

                            <ImageSkills src={docker}/>
                            <ImageSkills src={kubernates}/>
                            <ImageSkills src={kafka}/>
                            <ImageSkills src={confluent}/>

                            <ImageSkills src={aws}/>                            
                        </div>
                    </FastMarquee>
                </div>
            </div>
        </>
    )
}

export default Skills