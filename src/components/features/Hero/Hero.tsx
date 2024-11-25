import { LangContext } from '../../../context/Lang';
import { useContext } from 'react';
import HeroHeader from './HeroHeader';
import { motion } from 'framer-motion';
import HeroServicesHeader from '../Services/HeroServicesHeader';
import HeroServicesBody from '../Services/HeroServicesBody';
import AboutHeader from '../About/AboutHeader';
import AboutBody from '../About/AboutBody';
import AboutBodyMobile from '../About/AboutBodyMobile';
import HeroServicesMobile from '../Services/HeroServicesMobile';
import ContactHeader from '../Contact/ContactHeader';
import ContactBody from '../Contact/ContactBody';

const Hero = () => {

  const { lang } = useContext(LangContext);

  return (
    <>
<motion.div>

      <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='h-screen justify-center items-center flex flex-col'
      >
      <div className='flex justify-center'> 
        <HeroHeader lang={lang} />
      </div>
    {/* Servicios */}
    </motion.div>
    <AboutHeader />
    <AboutBody lang={lang}/>
    <AboutBodyMobile lang={lang}/>
    <HeroServicesHeader />
    <HeroServicesBody lang={lang}/>
    <HeroServicesMobile lang={lang}/>
    <ContactHeader />
    <ContactBody lang={lang} />
</motion.div>
      </>
  );
};

export default Hero;
