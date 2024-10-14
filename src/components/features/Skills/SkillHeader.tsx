import { CardHeader } from '@nextui-org/react';
import React from 'react';
import { Lang } from '../../../context/Lang';
import { texts } from './Text';

interface SkillHeaderProps {
  lang: Lang;
}

const SkillHeader: React.FC<SkillHeaderProps> = ({ lang }) => {
  return (
    <CardHeader className="flex flex-col md:flex-row justify-start items-center gap-2 sm:gap-4">
      <p className="text-3xl font-bold mb-4">{texts[lang].title.main}</p>
    </CardHeader>
  );
};

export default SkillHeader;
