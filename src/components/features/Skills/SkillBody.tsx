import { Card, CardBody } from '@nextui-org/react';
import { Lang } from '../../../context/Lang';
import { skills } from './Text';
import SkillTree from './SkillTree';

interface SkillBodyProps {
  lang: Lang;
}

const SkillBody: React.FC<SkillBodyProps> = ({ lang }) => {
  const localizedSkills = skills.map((skill) => skill[lang]);

  return (
    <Card
      radius="none"
      isBlurred={true}
      className="mb-4 bg-transparent p-3"
      fullWidth={true}
    >
      <CardBody>
        <SkillTree skills={localizedSkills} />
      </CardBody>
    </Card>
  );
};

export default SkillBody;
