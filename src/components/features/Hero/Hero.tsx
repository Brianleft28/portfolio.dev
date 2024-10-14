import { Card, CardFooter } from '@nextui-org/card';
import { Divider } from '@nextui-org/react';
import Buttons from './Buttons';
import { LangContext } from '../../../context/Lang';
import { useContext } from 'react';
import HeroBody from './HeroBody';
import HeroHeader from './HeroHeader';
import { motion } from 'framer-motion';

const Hero = () => {
  const { lang } = useContext(LangContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        shadow="lg"
        radius="none"
        isBlurred={true}
        className="mb-4 bg-transparent p-3"
      >
        <HeroHeader lang={lang} />
        <Divider />
        <HeroBody lang={lang} />
        <Divider />
        <CardFooter className="gap-x-3 md:gap-y-0 gap-y-5 mt-2 md:flex-row flex-col">
          <Buttons lang={lang} />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Hero;
