import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg"
import Image from "next/image";

const FeaturedArticle = ({img, title, time, summary, link}) => {
    return(
        <li>
            <Link href={link} target="_blank" className="w-full cursor-pointer overflow-hidden rounded-lg">
                <Image src={img} alt={title} className="w-full h-auto"/>
            </Link>
            <Link href={link} target="_blank">
                <h2 className="capitalize text-2x1 font-bold my-2">{title}</h2>
            </Link>
            <p className="text-sm mb-2">{summary}</p>
            <span className="text-primary font-semibold">{time}</span>
        </li>
    )
}

const articles = () => {
    return (
        <>
            <Head>
                <title>About page</title>
                <meta name="description" content="any description"/>
            </Head>
            <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
                <Layout className="pt-16">
                    <AnimatedText text="Words can change the world!" className="mb-16"/>
                    <ul className="grid grid-cols-2 gap-16">
                        <FeaturedArticle 
                        title="Build A Custom Pagination Component In Reactjs From Scratch"
                        summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project.
                        9 min read"
                        time="9 min read"
                        link="/"
                        img={article1}/>
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles