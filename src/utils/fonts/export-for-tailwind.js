import { Lato, Merriweather, Montserrat, Nunito, Assistant,  Inter, Barlow, Bitter, Roboto, Rubik, Open_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
const opens = Open_Sans({ subsets: ['latin'] });
const roboto = Roboto({ weight: "400", subsets: ['latin'] });
const rubik = Rubik({ subsets: ['latin'] });
const barlow = Barlow({ weight: "400", subsets: ['latin'] });
const bitter = Bitter({ subsets: ['latin'] });
const lato = Lato({ weight: "400", subsets: ['latin'] });
const merriweather = Merriweather({ weight: "400", subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });
const assistant = Assistant({ subsets: ['latin'] });

export const templateFont = () => {
    const font = process.env.NEXT_PUBLIC_FONT_FAMILY;
    switch (font) {
        case 'inter':
            return inter;
        case 'open_sans':
            return opens;
        case 'roboto':
            return roboto;
        case 'rubik':   
            return rubik;
        case 'barlow':  
            return barlow;
        case 'bitter':  
            return bitter;
        case 'lato':    
            return lato;
        case 'merriweather':    
            return merriweather;
        case 'montserrat':  
            return montserrat;
        case 'nunito':  
            return nunito;
        case 'assistant':
            return assistant;   
        default:
            return inter;
    }
}

export const templateFontColor = () => {
    const color = process.env.NEXT_PUBLIC_FONT_COLOR;
    return `text-${color}` || "text-white";
}

export const primaryColor = () => {
    const color = process.env.NEXT_PUBLIC_PRIMARY_COLOR;
    return color || "white";
}

export const templateBgColor = () => {
    const color1 = process.env.NEXT_PUBLIC_BG_COLOR;
    const color2 = process.env.NEXT_PUBLIC_BG_SECONDARY_COLOR;
    if (color2) return `bg-gradient-to-r from-${color1} to-${color2}`
    else return `bg-${color1}` || "bg-gray-900";
}