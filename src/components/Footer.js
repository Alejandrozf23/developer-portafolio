import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t-2 border-solid border-dark">
            <Layout>
                <span>Rights</span>
                <Link href="/">CodeBucks</Link>
                <Link href="/">Say hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer