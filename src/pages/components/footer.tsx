// Extension
import Link  from "next/link";

const Footer = (props:any) => {
    return ( <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div className="mx-auto max-w-screen-xl text-center">
        <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">

            <li>
                <Link href="/" className="mr-4 hover:underline md:mr-6">Blog</Link>
            </li>
            <li>
                <Link href="/#pricing" className="mr-4 hover:underline md:mr-6">Pricing</Link>
            </li>
            <li>
                <Link href="/#faqs" className="mr-4 hover:underline md:mr-6">FAQs</Link>
            </li>
            <li>
                <Link href="/" className="mr-4 hover:underline md:mr-6">Contact</Link>
            </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">©{new Date().getFullYear()} {props.data}  All Rights Reserved.</span>
    </div>
  </footer>)
};

export default Footer;