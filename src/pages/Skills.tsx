import { Card, Divider } from '@nextui-org/react';
import SkillHeader from '../components/features/Skills/SkillHeader';
import { useContext } from 'react';
import { LangContext } from '../context/Lang';
import SkillBody from '../components/features/Skills/SkillBody';

const Skills = () => {
  const { lang } = useContext(LangContext);

  return (
    <Card
      radius="none"
      className="mb-4 shadow-none bg-transparent p-3  md:min-w-[1000px]"
    >
      <SkillHeader lang={lang} />
      <Divider />
      <SkillBody lang={lang} />
    </Card>
  );
};

export default Skills;
