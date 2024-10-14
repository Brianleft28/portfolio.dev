import { CardBody } from '@nextui-org/react';
import texts from './Text';
import { Lang } from '../../../context/Lang';

interface HeroBodyProps {
  lang: Lang;
}

const HeroBody: React.FC<HeroBodyProps> = ({ lang }) => {
  return (
    <CardBody className="md:mt-3 mt-2 px-4">
      <div className="text-lg font-primary leading-8 md:leading-10 text-justify md:text-start">
        {texts[lang].description}
      </div>
    </CardBody>
  );
};
export default HeroBody;
