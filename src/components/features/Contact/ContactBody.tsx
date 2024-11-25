import { Lang } from "../../../context/Lang";
import ContactForm from "./ContactForm"
import { text } from "./Text"; 

interface ContactBodyProps {
    lang: Lang;
}

const ContactBody: React.FC<ContactBodyProps> = ( { lang } ) => {
  return (
    <div 
    className="h-dvh md:flex flex-col md:flex-row 
    justify-center items-center 
    bg-gradient-to-br from-background/60 
    via-background/85 to-background/60 
    p-4 md:px-12">
    <div className="w-full">
        <ContactForm lang={lang}/>
    </div>
    <div
    className="m-4 px-4 pt-2 mt-2 rounded-se-3xl md:flex-grow items-center bg-no-repeat bg-contain bg-center "
    style={{ backgroundImage: `url('${text[0][lang].img}')`, 
    height: '95%', width: '100%' }}>
    </div>
    </div>
  )
}

export default ContactBody