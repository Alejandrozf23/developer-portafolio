import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({position, company, companyLink, time, address, work}) => {
    const ref = useRef(null);
    return <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
        <LiIcon reference={ref}/>
        <div>
            <h3 className="capitalize font-bold text-2xl">{position}&nbsp;
                <a href={companyLink} target="_blank" className="text-primary capitalize">@{company}</a>
            </h3>
            <span className="capitalize font-medium text-dark/75">
                {time} | {address}
            </span>
            <p className="font-medium w-full">
                {work}
            </p>
        </div>
    </li>
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );

    return(
        <div className="my-64">
            <h2 className="font-bold text-8x1 mb-32 w-full text-center">Experience</h2>
            <div ref={ref} className="w-[75%] mx-auto relative">
                <motion.div style={{scaleY:scrollYProgress}} className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"/>
                <ul className="w-full flex flex-col items-start justify-between ml-4">
                    <Details position="Software Engineer" company="B1Soft Latinoamerica" time="2020-2021" address="Mexico City" companyLink="https://b1-soft.com:449/bienvenido/"
                        work="Design and implementation of views for web applications related to electronic invoicing and 
                            purchase of licensing plans and develop a web application to monitor the stamping process of the 
                            companies showing in detail the steps of said process."/>
                    <Details position="Backend Developer" company="Banco Azteca" time="2021-2023" address="Mexico City" companyLink="https://www.bancoazteca.com.mx/"
                        work="Design and implementation of libraries for both SQL and NoSQL database connection utilities,
                            Kafka publishers and consumers and develop microservices for propagable events with the premise 
                            of event-oriented distribution. Implementation of event-oriented architecture with the purpose 
                            of triggering and establishing communication between decoupled microservices."/>
                    <Details position="Backend Developer" company="Bluetab America" time="2023-Present" address="Mexico City" companyLink="https://www.bluetab.net/es/"
                        work="Design and implementation of libraries for both SQL and NoSQL database connection utilities,
                            Kafka publishers and consumers and develop microservices for propagable events with the premise 
                            of event-oriented distribution. Implementation of event-oriented architecture with the purpose 
                            of triggering and establishing communication between decoupled microservices."/>
                </ul>
            </div>
        </div>
    )
}

export default Experience