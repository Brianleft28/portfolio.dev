import React, { useContext } from 'react';
import { LangContext } from '../../../context/Lang';
import { Certificate as CertificateType } from '../../../types';
import { motion } from 'framer-motion';

interface CertificateProps {
  certificate: CertificateType;
}

const Certificate: React.FC<CertificateProps> = ({ certificate }) => {
  const { lang } = useContext(LangContext);
  const certDetails = certificate[lang];

  return (
    <motion.div
      className="certificate bg-content2 p-4 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={certDetails.logo}
        alt={`${certDetails.name} logo`}
        className="w-16 h-16 mb-4"
      />
      <h3 className="text-xl font-bold text-foreground">{certDetails.name}</h3>
      <p className="text-content3-foreground">{certDetails.institution}</p>
      <p className="text-foreground">{certDetails.date}</p>
      <p className="text-foreground mt-2">{certDetails.description}</p>
      <a
        href={certDetails.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary mt-2 inline-block"
      >
        {lang === 'es' ? 'Ver Certificado' : 'View Certificate'}
      </a>
    </motion.div>
  );
};

export default Certificate;
