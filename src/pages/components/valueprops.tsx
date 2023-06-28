import { primaryColor, templateFontColor } from "@/utils/fonts/export-for-tailwind";

const ValueProps = (props: { data: {features: [{ description: String, img: String, subtitle: String, title: String }], featureSummary: {title: String, subtitle: String}} }) => {
    if (!props.data) return (<div>loading...</div>);
    const features = props.data.features || [];
    const featureSummary = props.data.featureSummary || {title: "", subtitle: ""};

    const font_color = templateFontColor();
    const primary_color = primaryColor();

    return (
        <section id="value-props" >
            <div className={`py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ${font_color}`}>
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className={`mb-4 text-4xl tracking-tight font-extrabold`}>{featureSummary.title}</h2>
                    <p className="sm:text-xl">{featureSummary.subtitle}</p>
                </div>
                <div className={`space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ${font_color}`}>
                  {features.map((feature, index) => (
                    <div key={feature.title + String(index)}>
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg className={`w-5 h-5 text-${primary_color} lg:w-6 lg:h-60`} fill={primary_color} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                        </div>
                        <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
            </div>
        </section>
    )
};

export default ValueProps