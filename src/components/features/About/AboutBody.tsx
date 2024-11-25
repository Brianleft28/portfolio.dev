import { Lang } from "../../../context/Lang";
import { FaLaptopCode } from "react-icons/fa6";
import { text } from "./Texts";

interface AboutBodyProps {
  lang: Lang;
}

const AboutBody: React.FC<AboutBodyProps> = ({ lang }) => {
  console
  return (
 <div className="h-dvh hidden md:flex p-4 md:px-12 items-center justify-between w-full bg-content1">
      <div className="flex-shrink-0 p-4 flex items-center justify-center w-1/2">
        <FaLaptopCode className="text-9xl text-secondary/70" />
      </div>
      <div className="flex-grow text-foreground w-1/2">
      <h3 className="text-end mb-3 text-6xl font-bold font-secondary">
        {text[lang].title}
      </h3>
      <h4 className="text-end mb-10 text-2xl font-bold font-secondary">
        {text[lang].subtitle}
      </h4>
        {text[lang].description}
      </div>
    </div>
  )
}

export default AboutBody