import React, { useState } from 'react';
import { Divider } from '@nextui-org/react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface Skill {
  id: number;
  name: string;
  description: string;
  img?: string;
  subSkills?: Skill[];
}

const SkillTree: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const [expandedSkills, setExpandedSkills] = useState<number[]>([]);

  const toggleSkill = (id: number) => {
    setExpandedSkills((prev) =>
      prev.includes(id)
        ? prev.filter((skillId) => skillId !== id)
        : [...prev, id]
    );
  };

  const renderSkills = (skills: Skill[]) => {
    return skills.map((skill) => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        key={skill.id}
        className="border border-divider bg-background p-4 rounded-lg mb-4 shadow-sm"
      >
        <div
          className={`${expandedSkills.includes(skill.id) ? 'text-secondary' : 'text-foreground'} flex items-center justify-center cursor-pointer hover:text-secondary hover:font-bold`}
          onClick={() => toggleSkill(skill.id)}
        >
          {skill.img && (
            <img
              src={skill.img}
              alt={skill.name}
              className="w-12 h-12 mr-4 rounded-full border-2 border-gray-300"
            />
          )}
          <h3 className="text-lg font-semibold">{skill.name}</h3>
          <div className="ml-auto">
            {expandedSkills.includes(skill.id) ? (
              <FaChevronUp className="text-secondary" />
            ) : (
              <FaChevronDown className="text-secondary" />
            )}
          </div>
        </div>
        {expandedSkills.includes(skill.id) && (
          <div className="mt-4">
            <Divider orientation="horizontal" className="bg-divider mb-3" />
            <p className={`text-foreground   px-3 mb-7`}>{skill.description}</p>
            {skill.subSkills && skill.subSkills.length > 0 && (
              <div className="ml-8 mt-4">{renderSkills(skill.subSkills)}</div>
            )}
          </div>
        )}
      </motion.div>
    ));
  };

  return <div className="space-y-4">{renderSkills(skills)}</div>;
};

export default SkillTree;
