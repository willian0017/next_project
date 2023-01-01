import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel='shortcut' href="/images/favicon.ico" icon />
                <title>GeoNext</title>
            </Head>
            <Navbar />
            <main className="main-container"> {children} </main>
            <Footer />
        </>
    )
}