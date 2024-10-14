import { Button } from '@nextui-org/react';
import { GrContact } from 'react-icons/gr';
import { RiBriefcase4Line } from 'react-icons/ri';
import { TbFileCv } from 'react-icons/tb';
import { Lang } from '../../../context/Lang';
import texts from './Text';
import { useNavigate } from 'react-router-dom';

interface ButtonsProps {
  lang: Lang;
}

const Buttons: React.FC<ButtonsProps> = ({ lang }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        className="hover:-translate-y-2 duration-250"
        radius="none"
        color="secondary"
        fullWidth={true}
        variant="ghost"
        onClick={() => navigate(texts[lang].buttons.contact.href)}
        size="lg"
      >
        {texts[lang].buttons.contact.label} <GrContact />
      </Button>
      <Button
        className="hover:-translate-y-2 duration-250"
        radius="none"
        color="secondary"
        fullWidth={true}
        variant="ghost"
        onClick={() => navigate(texts[lang].buttons.work.href)}
        size="lg"
      >
        {texts[lang].buttons.work.label}
        <RiBriefcase4Line />
      </Button>
      <Button
        className="hover:-translate-y-2 duration-250"
        radius="none"
        color="secondary"
        as={'a'}
        href={texts[lang].buttons.cv.href}
        target="_blank"
        rel="noopener noreferrer"
        fullWidth={true}
        variant="ghost"
        size="lg"
      >
        {texts[lang].buttons.cv.label}

        <TbFileCv />
      </Button>
    </>
  );
};

export default Buttons;
