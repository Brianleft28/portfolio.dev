import React, { useContext } from 'react';
import { certificates } from './Text';
import Certificate from './Certificate';
import { LangContext } from '../../../context/Lang';
import { Divider } from '@nextui-org/react';

const CertificateList: React.FC = () => {
  const { lang } = useContext(LangContext);
  // agrupar certificados por categoria

  const groupedCertificates = certificates.reduce(
    (acc, cert) => {
      const category = cert[lang].category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(cert);
      return acc;
    },
    {} as { [key: string]: typeof certificates }
  );
  return (
    <div className="">
      {Object.keys(groupedCertificates).map((category) => (
        <div key={category}>
          <h2 className="text-2xl font-bold text-foreground mt-4 mb-1.5">
            {category}
          </h2>
          <Divider className="bg-divider mb-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {groupedCertificates[category].map((cert, index) => (
              <Certificate key={index} certificate={cert} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificateList;
