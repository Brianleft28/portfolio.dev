import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LangContext } from '../context/Lang';
import { projects, texts } from '../components/features/Projects/Texts';
import { Category, CategoryContext } from '../context/Category';
import ProjectNavbar from '../components/features/Projects/ProjectNavbar';
import { motion } from 'framer-motion';
const Projects = () => {
  const { lang } = useContext(LangContext);
  const { category, setCategory } = useContext(CategoryContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    if (
      category !== 'all' &&
      category !== '' &&
      project[lang].category !== category
    ) {
      return false;
    }
    if (
      searchQuery &&
      !project[lang].title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  const handleProjectClick = (key: number) => {
    navigate(`/projects/${key}`);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  const handleCategoryChange = (selectedCategory: Category) => {
    setCategory(selectedCategory);
  };

  return (
    <>
      <div className="">
        <ProjectNavbar
          onSearch={handleSearch}
          onCategoryChange={handleCategoryChange}
        />
      </div>
      <div className="container min-w-full p-5  pt-32">
        <div className="space-y-8">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project[lang].key + i}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-transparent  shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleProjectClick(project[lang].key)}
            >
              <div className="flex flex-col md:flex-row">
                <img
                  src={project[lang].img[0]}
                  alt={project[lang].title}
                  className="w-full md:w-1/3 h-48 object-cover mx-auto"
                />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl text-secondary  font-bold mb-2">
                      {project[lang].title}
                    </h2>
                    <div className="mt-2 mb-2 line-clamp-4">
                      <p className="text-foreground mb-4">
                        {project[lang].description}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="text-primary-500 hover:underline">
                      {texts[lang].buttons.viewMore}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
