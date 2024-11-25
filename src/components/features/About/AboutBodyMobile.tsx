import { FaLaptopCode } from "react-icons/fa";
import { Lang } from "../../../context/Lang";
import { text } from "./Texts";

interface AboutBodyMobileProps {
    lang: Lang;

}

const AboutBodyMobile: React.FC<AboutBodyMobileProps> = ( { lang } ) => {

  return (
    <div className="flex flex-col md:hidden h-screen items-stretch justify-center w-full px-10 bg-content1">
      <div className="text-center">
        <h3 className="mb-3 text-4xl text-end font-bold font-secondary">
          {text[lang].title}
        </h3>
        <h4 className="mb-10 text-xl text-end font-bold font-secondary">
          {text[lang].subtitle}
        </h4>
      </div>
      <div className="text-center">
        {text[lang].description}
      </div>
      <div className="flex justify-end pt-8">
        <FaLaptopCode className="text-9xl text-secondary/70" />
      </div>
    </div>
  )
}

export default AboutBodyMobile