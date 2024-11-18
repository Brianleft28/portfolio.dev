import { Typewriter } from 'react-simple-typewriter';
import { Lang } from '../../../context/Lang';
import texts from './Text';
interface SubtitleProps {
  lang: Lang;
}

const Subtitle: React.FC<SubtitleProps> = ({ lang }) => {
  return (
    <div className="text-center mx-auto md:text-start text-sm md:text-xl font-secondary selection:bg-none hover:cursor-default tracking-widest  text-content3-foreground font-semibold mt-2">
      <Typewriter
        words={texts[lang].subtitle.words}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={65}
        deleteSpeed={80}
        delaySpeed={3000}
      />
    </div>
  );
};

export default Subtitle;
