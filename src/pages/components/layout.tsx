import Footer from "./footer";
import Nav from "./navigation";
import { SEO } from "../../types/seo";
import Head from 'next/head';
import {templateFont, templateFontColor, templateBgColor} from "../../utils/fonts/export-for-tailwind";

const font = templateFont();
const font_color = templateFontColor();
const bg_color = templateBgColor();
console.log("BG COLOR", `flex min-h-screen flex-col items-center justify-between p-24 ${font.className} ${font_color} ${bg_color}` )

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
            <Nav style={`${font.className}`} data={{brand, ctaLabel}}/>
            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${font.className} ${font_color} ${bg_color}`}>
                {children}
            </main>
            <Footer style={`${font.className}`} data={brand} />
        </>
};

export default Layout;