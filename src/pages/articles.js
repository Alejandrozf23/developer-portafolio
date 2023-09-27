import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";

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
                        <li>Featured articles-1</li>
                        <li>Featured articles-2</li>
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default articles