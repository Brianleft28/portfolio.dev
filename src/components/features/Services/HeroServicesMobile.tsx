import { Lang } from "../../../context/Lang";
import Buttons from "../Hero/Buttons";
import { text } from "./Texts";

interface HeroServicesMobileProps {
    lang: Lang;
}

const HeroServicesMobile: React.FC<HeroServicesMobileProps> = ({ lang }) => {
  return (  
    <div className="overflow-auto py-5 flex-col md:hidden h-screen items-center justify-center w-full px-10 bg-content1">
      <div className="">  
          <div>
            <div>
            {text[lang].servicesBackend}
            </div>
            <div className="flex gap-2 justify-center items-center mb-4">
            <img 
            src={text[lang].backendImg}
            alt="Backend Services"
            className="w-1/2 h-auto object-contain border-2 border-content3"
            />
            <img 
            src={text[lang].frontendImg}
            alt="Frontend Services"
            className="w-1/2 h-auto object-contain border-2 border-content3"
            />
            </div>
            <div>
              {text[lang].servicesFrontend}
            </div>
            <div className="flex gap-y-3 flex-col">
              <Buttons lang={lang}/>
            </div>
          </div>
        </div>
      <div>
      </div>
    </div>
  )
}

export default HeroServicesMobile