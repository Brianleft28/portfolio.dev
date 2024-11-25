import { ReactNode, useContext } from 'react';
import Navbar from './Navbar/Navbar';
import { ThemeContext } from '../../context/Theme';
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`relative font-primary bg-gradient-to-br from-background via-background/95 to-background/90 ${theme}`}
    >
      <div className={`absolute w-full h-full`}></div>
      <Navbar />
      <div
        className={`relative  overflow-hidden lg:px-16 md:px-20 px-10 pt-3 justify-center items-center flex`}
      >
        <div className={`relative z-10 ${theme}`}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
