import React from 'react';
import { certificates } from './Text';
import Certificate from './Certificate';

const CertificateList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {certificates.map((cert, index) => (
        <Certificate key={index} certificate={cert} />
      ))}
    </div>
  );
};

export default CertificateList;