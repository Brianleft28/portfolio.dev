import React, { useContext } from 'react';
import CertificateList from '../components/features/Education/CertificateList';
import { text } from '../components/features/Education/Text';
import { LangContext } from '../context/Lang';

const Education: React.FC = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className="education-section">
      <h2 className="text-3xl font-bold mb-4 text-center md:text-start">
        {text.title[lang]}
      </h2>
      <CertificateList />
    </div>
  );
};

export default Education;
