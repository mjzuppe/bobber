// Extension
import { primaryColor } from "@/utils/fonts/export-for-tailwind";
import Link  from "next/link";

const buttonColor = primaryColor();


const Pricing = (props: { data: {ctaLabel: String, pricing: [{ img: String, period: String, priceUSD: String, subtitle: String, title:  String }]} }) => {
    const {pricing, ctaLabel} = props.data;
    if (!pricing) return (<div>loading...</div>);
    const gridClass = `space-y-8 lg:grid lg:grid-cols-${pricing.length} sm:gap-6 xl:gap-10 lg:space-y-0`
    return (
        <section id="pricing" >
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold">Pricing</h2>
                    {/* <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p> */}
                </div>
                <div className={gridClass}>
                    {pricing.map((pricing, index) => (
                    <div key={pricing.title + String(index)} className="flex flex-col p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 text-black">
                        <h3 className="mb-4 text-2xl font-semibold text-black">{pricing.title}</h3>
                        <p className="text-black">{pricing.subtitle}</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold">${pricing.priceUSD}</span>
                            <span>/{pricing.period}</span>
                        </div>

                        {/* <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Individual configuration</span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>No setup, or hidden fees</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Team size: <span className="font-semibold">1 developer</span></span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Premium support: <span className="font-semibold">6 months</span></span>
                            </li>
                            <li className="flex items-center space-x-3">

                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                                <span>Free updates: <span className="font-semibold">6 months</span></span>
                            </li>
                        </ul> */}
                        <Link href="#" className={`text-white bg-${buttonColor}-600 hover:bg-${buttonColor}-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900`}>{ctaLabel}</Link>
                    </div>

                    ))}
                </div>
            </div>
        </section>
    )
};

export default Pricing;