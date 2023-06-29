import { primaryColor, templateBgColor, templateFontColor } from "@/utils/fonts/export-for-tailwind";

const FatSections = (props: { data: { features: [{ description: String, img: String, subtitle: String, title: String }], featureSummary: { title: String, subtitle: String } } }) => {
    if (!props.data) return (<div>loading...</div>);
    const features = props.data.features || [];
    const featureSummary = props.data.featureSummary || { title: "", subtitle: "" };

    const font_color = templateFontColor();
    const primary_color = primaryColor();
    const bg_color = templateBgColor();

    return (
        <section id="value-props" className="w-full" >
            <div className={`px-0  sm:py-8 md:py-10 lg:px-0 ${font_color} text-center `}>
                <div className="text-center">
                    <h2 className={`mb-4 text-4xl tracking-tight font-extrabold`}>{featureSummary.title}</h2>
                    <p className="sm:text-xl">{featureSummary.subtitle}</p>
                </div>
            </div>
            {features.map((feature, index) => (
                <div className={`flex flex-wrap lg:flex-nowrap ${index % 2 === 0 ? "flex-row" : "flex-row"} justfiy-between py-12`} key={feature.title + String(index)} >
                    <div className="sm:w-60 sm:w-full md:w-1/3 md:max-w-md ">
                        <img className="rounded-xl overflow-hidden" src="https://placekitten.com/1200/800" alt="mockup" />
                    </div>

                    <div className={`flex md:w-2/3 p-8 items-center text-center md:text-left md:pl-24`} >
                        <div className="w-full align-middle">
                            <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    </div>

                </div>
            ))}
        </section>
    )
};




export default FatSections