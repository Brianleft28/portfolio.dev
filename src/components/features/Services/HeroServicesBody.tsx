import { Lang } from "../../../context/Lang";
import Buttons from "../Hero/Buttons";
import { text } from "./Texts";


interface HeroServicesBodyProps {
  lang: Lang;
}

const HeroServicesBody: React.FC<HeroServicesBodyProps> = ({ lang }) => {
  console
  return (
    <div className="hidden md:flex justify-center h-dvh py-10 flex-row px-10 bg-content1 w-full">
      <div className="flex flex-col items-center justify-between">
        <div className="px-4 pt-2 flex flex-col text-foreground">
          <div>
           {text[lang].servicesBackend}
          </div>
          <div>
            {text[lang].servicesFrontend}
          </div>
        </div>
        <div className="flex flex-row gap-x-3 mt-4 items-end">
          <Buttons lang={lang} />
        </div>
      </div>
      <div className="m-4 px-4 pt-2 mt-2 rounded-se-3xl  flex-grow flex flex-col justify-around items-center bg-no-repeat bg-cover bg-center"
           style={{ backgroundImage: `url(${text[lang].backendImg}), url(${text[lang].frontendImg})`, height: '100%', width: '100%' }}>
        {/* Puedes agregar contenido adicional aquí si es necesario */}
      </div>
    </div>

  )
}

export default HeroServicesBody