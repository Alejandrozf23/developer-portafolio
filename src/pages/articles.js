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
            <main>
                <Layout>
                    <AnimatedText text="Words can change the world!"/>
                </Layout>
            </main>
        </>
    )
}

export default articles