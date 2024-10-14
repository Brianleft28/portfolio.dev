import React, { useContext, useEffect } from 'react';
import {
  Input,
  Navbar,
  NavbarContent,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { IoSearchCircleOutline } from 'react-icons/io5';
import { Category, CategoryContext } from '../../../context/Category';
import { LangContext } from '../../../context/Lang';
import { texts } from './Texts';

interface ProjectNavbarProps {
  onSearch: (query: string) => void;
  onCategoryChange: (selectedCategory: Category) => void;
}

const ProjectNavbar: React.FC<ProjectNavbarProps> = ({
  onSearch,
  onCategoryChange,
}) => {
  const { lang } = useContext(LangContext);
  const { category, setCategory } = useContext(CategoryContext);

  const handleCategoryChange = (selectedKeys: any) => {
    const selectedCategory = selectedKeys.currentKey as Category;
    setCategory(selectedCategory);

    onCategoryChange(selectedCategory);
  };

  const handleSearchChange = (event: any) => {
    onSearch(event.target.value);
  };

  useEffect(() => {
    if (!category) {
      setCategory('all'); // Establecer una categoría predeterminada si no hay ninguna seleccionada
    }
  }, [category, setCategory]);

  return (
    <Navbar
      isBordered
      className="fixed pb-9 md:pb-5 top-24 md:top-16 left-0 w-full shadow-md z-50"
    >
      <NavbarContent className="flex justify-center items-center p-4 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4">
          <Input
            classNames={{
              base: 'w-full sm:w-1/2 h-12',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
            }}
            placeholder="Type to search..."
            size="md"
            startContent={<IoSearchCircleOutline size={18} />}
            type="search"
            onChange={handleSearchChange}
          />

          <Select
            variant="flat"
            size="sm"
            label={texts[lang].selectText}
            defaultSelectedKeys={'all'}
            className="max-w-xs"
            onSelectionChange={handleCategoryChange}
          >
            {texts[lang].options.map((option) => (
              <SelectItem key={option.key} value={option.key}>
                {option.label}
              </SelectItem>
            ))}
          </Select>
        </div>
      </NavbarContent>
    </Navbar>
  );
};

export default ProjectNavbar;
