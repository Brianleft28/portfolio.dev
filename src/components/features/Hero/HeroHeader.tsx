import { Card } from '@nextui-org/react';
import Subtitle from './Subtitle';
import { Lang } from '../../../context/Lang';
import texts from './Text';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandTypescript } from "react-icons/tb";
interface HeroHeaderProps {
  lang: Lang;
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ lang }) => {
  return (
    <Card 
    radius='none'
    shadow='none'
    className='bg-transparent h-dvh flex items-center justify-center'>
       <div className="flex flex-col items-center mx-auto">
        <div className="flex items-center justify-between w-full">
          <FaNodeJs className="hidden md:flex text-green-500 text-3xl md:text-4xl lg:text-5xl" />
          <h1 className="text-center text-3xl md:text-3xl lg:text-4xl font-bold tracking-wide leading-tight mx-4">
            {texts[lang].greeting}
            <span className="text-secondary">{texts[lang].name}</span>
          </h1>
          <TbBrandTypescript className="text-blue-500 mt-1  hidden md:flex text-3xl md:text-4xl lg:text-5xl" />
        </div>
        <Subtitle lang={lang} />
        <div className='flex mt-3 md:hiddne flex-row gap-3 items-center justify-between w-28'>
        <TbBrandTypescript className="text-blue-500 flex md:hidden mt-1 text-3xl md:text-4xl lg:text-5xl" />
        <FaNodeJs className="text-green-500 flex md:hidden text-3xl md:text-4xl lg:text-5xl" />
        </div>
      </div>
    </Card>
  );
};
export default HeroHeader;
