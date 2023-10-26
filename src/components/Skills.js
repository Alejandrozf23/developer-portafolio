import React from 'react';
import Image from 'next/image'
import data from '@/constants/skills'
import FastMarquee from 'react-fast-marquee';

const ImageSkills = ({src, name}) => {
    return (
        <div key={name} className='flex w-full flex-col items-center justify-center'>
            <Image src={src} alt={name} width={100} height={100}
                className='rounded-2xl hover:scale-110 cursor-pointer 
                transition-all duration-300 ease-in-out object-cover object-center'/>
        </div>
    );
}

const Skills = () => {
    const skillList = data.skills;

    return(
        <>            
            <div className="my-32">
                <h2 className="font-bold text-8x1 mb-8 w-full text-center md:text-6x1 xs:text-4x1 md:mb-4">Tech Skills</h2>
                <div className='mt-0'>
                    <FastMarquee speed={80} direction="right" gradientColor={['red', 'blue']}>
                        <div className='flex items-center xs:gap-[50px] gap-[80px] xs:mr-[50px] mr-[80px] w-auto'>
                        {
                            skillList.map((detail) => (
                                <ImageSkills src={detail.link} name={detail.name}/>
                            ))
                        }
                                                        
                        </div>
                    </FastMarquee>
                </div>
            </div>
        </>
    )
}

export default Skills