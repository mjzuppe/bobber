import { Fahkwang, Inter } from 'next/font/google'
import Footer from "./footer";
import Nav from "./navigation";
import { SEO } from "../../types/seo";
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({children, data}:any): JSX.Element => {
    if (!data) return (<div>loading...</div>);
    const { brand, seo, ctaLabel} = data;
    return <>
           <Head>
                <title>{seo?.title || ""}</title>
                <meta name="description" content={seo?.description || ""} key="desc" />
                <meta property="og:title" content={seo?.title || ""} />
                <meta
                    property="og:description"
                    content={seo?.description || ""}
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content={seo?.image || ""}
                />
            </Head>
            <Nav data={{brand, ctaLabel}}/>
            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
                {children}
            </main>
            <Footer data={brand} />
        </>
};

export default Layout;