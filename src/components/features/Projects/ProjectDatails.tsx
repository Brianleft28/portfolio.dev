import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LangContext } from '../../../context/Lang';
import { projects, texts } from './Texts';
import { Button } from '@nextui-org/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';

const ProjectDetails: React.FC = () => {
  const { lang } = useContext(LangContext);
  const { key } = useParams<{ key: string }>();
  const navigate = useNavigate();

  const project = projects.find(
    (project) => project[lang].key.toString() === key
  );

  if (!project) {
    return <div>Project not found</div>;
  }

  const img = project[lang].img;
  const description = project[lang].description;

  // Función para dividir la descripción en dos partes
  const splitDescription = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return [text, ''];
    const splitIndex = text.lastIndexOf(' ', maxLength);
    return [text.slice(0, splitIndex), text.slice(splitIndex + 1)];
  };

  const [firstPart, secondPart] = splitDescription(description, 1019); // Ajusta el valor 300 según sea necesario

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto p-5">
          <div className="flex md:justify-between justify-center">
            <h1 className="text-4xl text-forefound font-secondary font-bold mb-2">
              {project[lang].title}
            </h1>
            <Button radius="none" variant="ghost" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-1 border-divider border-0 border-t-1">
              {/* Etiquetas */}
              <div className="flex flex-wrap gap-x-1 mt-4">
                {project[lang].badge.map((tag, index) => (
                  <div
                    key={index}
                    className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap border-medium border-default text-foreground bg-transparent px-1 h-6 text-tiny rounded-full mr-1 mb-2 shadow-sm"
                  >
                    <span className="w-2 h-2 ml-1 rounded-full bg-secondary"></span>
                    <span className="flex-1 text-inherit font-normal px-1">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
              <Carousel
                showThumbs={false}
                showStatus={true}
                infiniteLoop={true}
              >
                {img.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`project-image-${index}`}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </Carousel>
              <div>
                <Button
                  className="mt-4"
                  color="secondary"
                  radius="none"
                  fullWidth={true}
                  variant="ghost"
                  onClick={() => window.open(project[lang].github, '_blank')}
                >
                  {texts[lang].buttons.viewOnGithub}
                </Button>
              </div>
            </div>
            <div className="flex flex-col justify-start md:col-span-1">
              <p className="text-foreground text-justify leading-8">
                {firstPart}
              </p>
            </div>
          </div>
          {/* Segunda parte de la descripción */}
          <div className="mt-8">
            <p className="text-foreground text-justify leading-8">
              {secondPart}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectDetails;
