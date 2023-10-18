import React from "react";
import FastMarquee from 'react-fast-marquee';
import angular from "../../public/images/Angular.png"
import spring from "../../public/images/Logo-spring.png"
import c from "../../public/images/C++.png"
import firebase from "../../public/images/Firebase.png"
import java from "../../public/images/Java.png"
import javascript from "../../public/images/Javascript.png"
import django from "../../public/images/Logo-django.png"
import php from "../../public/images/PHP.png"
import python from "../../public/images/Python.png"
import react from "../../public/images/React.png"
import Image from "next/image";

const Skills = () => {
    return(
        <>            
            <div className="my-32">
                <h2 className="font-bold text-8x1 mb-8 w-full text-center md:text-6x1 xs:text-4x1 md:mb-4">Tech Skills</h2>
                <div className='mt-0'>
                    <FastMarquee speed={75} direction="right" gradientColor={['red', 'blue']}>
                        <div className='flex items-center xs:gap-[50px] gap-[80px] xs:mr-[50px] mr-[80px] w-auto'>
                            <Image src={angular} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                            <Image src={spring} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                            <Image src={java} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                            <Image src={c} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                            <Image src={firebase} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                            <Image src={javascript} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                            <Image src={django} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                            <Image src={php} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                            <Image src={react} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                            <Image src={python} alt="Codebucks" className='rounded-full hover:scale-110 cursor-pointer transition-all duration-300 ease-in-out object-cover object-center' width={90} height={90}/>
                        </div>
                    </FastMarquee>
                </div>
            </div>
        </>
    )
}

export default Skills