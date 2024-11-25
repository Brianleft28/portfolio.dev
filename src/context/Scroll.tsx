// ScrollContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";

interface ScrollContextProps {
  showNavbar: boolean;
}

const ScrollContext = createContext<ScrollContextProps>({ showNavbar: false });

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: ReturnType<typeof setTimeout>;
      
    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);

      const scrollThreshold = 20; // Ajusta este valor para cambiar la sensibilidad
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY + scrollThreshold) {
        setShowNavbar(true);
      } else if (currentScrollY < lastScrollY - scrollThreshold) {
        setShowNavbar(false);
      }
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);

      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };

  }, [lastScrollY]);

  useEffect(() => {
    if (!isScrolling) {
      setShowNavbar(false);
    }
  }, [isScrolling]);

  return (
    <ScrollContext.Provider value={{ showNavbar }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);