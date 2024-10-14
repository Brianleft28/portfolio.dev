import { Project } from '../../../types';

import p1 from '../../../img/memorandum/p1.png';
import p2 from '../../../img/memorandum/p1_0.png';
import p3 from '../../../img/memorandum/p1_1.png';
import p4 from '../../../img/memorandum/p1_2.png';
import p5 from '../../../img/memorandum/p1_3.png';
import p6 from '../../../img/memorandum/p1_4.png';
import p7 from '../../../img/memorandum/p1_5.png';

import p1_1 from '../../../img/luzbelitoh/p1.png';
import p2_1 from '../../../img/luzbelitoh/p1_1.png';
import p3_1 from '../../../img/luzbelitoh/p1_2.png';
import p4_1 from '../../../img/luzbelitoh/p1_3.png';
import p5_1 from '../../../img/luzbelitoh/p1_4.png';

import p1_2 from '../../../img/console/p1.png';
import p2_2 from '../../../img/console/p1_1.png';
import p3_2 from '../../../img/console/p1_2.png';
import p4_2 from '../../../img/console/p1_3.png';
import p5_2 from '../../../img/console/p1_4.png';

import fotografia from '../../../img/fotografia/foto.png';
import fotografia1 from '../../../img/fotografia/foto1.png';
import fotografia2 from '../../../img/fotografia/foto2.png';
import fotografia3 from '../../../img/fotografia/foto3.png';

import migracion from '../../../img/migracion/migracion.png';
import migracion1 from '../../../img/migracion/migracion1.png';
import migracion2 from '../../../img/migracion/migracion2.png';

export const texts = {
  en: {
    title: {
      main: 'My Work',
      secondary: 'Some of my projects',
    },
    options: [
      { key: 'all', label: 'All' },
      { key: 'backend', label: 'Backend' },
      { key: 'frontend', label: 'Frontend' },
    ],
    selectText: 'Filter by category',
    back: 'Back to projects',
    buttons: {
      viewMore: 'View more',
      viewOnGithub: 'View on Github',
    },
  },
  es: {
    title: {
      main: 'Mis trabajos',
      secondary: 'Algunos proyectos',
    },
    options: [
      { key: 'all', label: 'Todos' },
      { key: 'backend', label: 'Backend' },
      { key: 'frontend', label: 'Frontend' },
    ],
    selectText: 'Filtrar por categoría',
    back: 'Volver a proyectos',
    buttons: {
      viewMore: 'Ver más',
      viewOnGithub: 'Ver en Github',
    },
  },
};

export const projects: Project[] = [
  {
    es: {
      id: 1,
      key: 1,
      category: 'frontend',
      title: 'Memorandum Digital',
      description: `El proyecto para la Secretaría de Innovación de Ituzaingó ofrece una solución tecnológica que digitaliza y optimiza la gestión de los procesos administrativos internos. Desarrollado con Svelte, TypeScript, Node.js, Express y SQL.

      La aplicación permite cargar, asignar y seguir 'memos' en tiempo real, eliminando el uso de papel y mejorando la eficiencia. El sistema incluye un motor de búsqueda que facilita el filtrado de memos por descripción, fecha o estado, mejorando la localización y gestión de documentos en la base de datos.

      Además, se ha implementado un panel estadístico utilizando Chart.js, que proporciona visualización de datos en tiempo real para apoyar la toma de decisiones.

      Esta solución demuestra el uso de tecnologías modernas y eficientes para digitalizar procesos administrativos, posicionando al municipio a la vanguardia de la innovación digital.`,
      href: 'https://www.google.com',
      github: 'https://github.com/Brianleft28/Memorando-front',
      badge: ['SvelteKit', 'Node', 'Typescript', 'SQL', 'Express', 'Tailwind'],
      img: [p1, p2, p3, p4, p5, p6, p7],
    },
    en: {
      id: 1,
      key: 1,
      category: 'frontend',
      title: 'Digital Memorandum',
      description: `
      The project for the Secretariat of Innovation of Ituzaingó offers a
      technological solution that digitizes and optimizes the management of
      internal administrative processes. Developed with Svelte, TypeScript,
      Node.js, Express, and SQL.

      The application allows for the real-time uploading, assigning, and
      tracking of 'memos', eliminating the use of paper and improving
      efficiency. The system includes a search engine that facilitates
      filtering memos by description, date, or status, improving the
      localization and management of documents in the database.

      Additionally, a statistical panel has been implemented using
      Chart.js, which provides real-time data visualization to support
      decision-making.

      This solution demonstrates the use of modern and efficient
      technologies to digitize administrative processes, positioning the
      municipality at the forefront of digital innovation.
    `,
      href: 'https://www.google.com',
      github: 'https://github.com/Brianleft28/Memorando-front',
      badge: ['Svelte', 'Node', 'SQL', 'Bootstrap'],
      img: [p1, p2, p3, p4, p5, p6, p7],
    },
  },
  {
    es: {
      id: 2,
      key: 2,
      category: 'backend',
      title: 'Luzbelitoh Discord Bot',
      description: `
            Este bot de Discord está diseñado para proporcionar una amplia gama
            de funcionalidades que mejoran la experiencia del usuario en
            servidores de Discord. Desarrollado con Node y la biblioteca
            discord.js, el bot es altamente modular y escalable, permitiendo la
            fácil adición de nuevas características y comandos. El bot está
            diseñado con una arquitectura modular que facilita la adición de
            nuevas funcionalidades sin afectar las existentes.`,
      href: 'https://www.google.com',
      github: 'https://github.com/Brianleft28/Luzbelitoh',
      badge: ['Discord.js', 'Node', 'Javascript', 'Google APIs'],
      img: [p3_1, p1_1, p2_1, p4_1, p5_1],
    },

    en: {
      id: 2,
      key: 2,
      category: 'backend',
      title: 'Luzbelitoh Discord Bot',
      description: `
            This Discord bot is designed to provide a wide range of
            functionalities that enhance the user experience in Discord servers.
            Developed with Node.js and the discord.js library, the bot is highly
            modular and scalable, allowing for the easy addition of new features
            and commands. The bot is designed with a modular architecture that
            facilitates the addition of new functionalities without affecting
            existing ones.`,
      href: 'https://www.google.com',
      github: 'https://github.com/Brianleft28/Luzbelitoh',
      badge: ['Discord.js', 'Node', 'Javascript', 'Google APIs'],
      img: [p3_1, p1_1, p2_1, p4_1, p5_1],
    },
  },
  {
    es: {
      id: 3,
      key: 3,
      category: 'backend',
      title: 'Rutina de Autenticación',
      description: `
        
            Este proyecto es una aplicación de verificación de usuarios y
            permisos desarrollada en Node.js. Utiliza varias librerías para
            proporcionar una interfaz de línea de comandos interactiva y
            funcional.
        
        
            Las principales librerías utilizadas son Axios para realizar
            solicitudes HTTP a una API externa, Chalk para estilizar la salida
            en la consola con colores, cli-table3 para mostrar datos en formato
            de tabla en la consola, dotenv para manejar variables de entorno, e
            Inquirer para crear menús interactivos en la línea de comandos.
        
        
            La aplicación permite verificar si un usuario existe y si las
            credenciales proporcionadas son correctas, verificar si un usuario
            tiene ciertos permisos en una aplicación específica, y leer un
            archivo JSON con múltiples usuarios para verificar sus credenciales
            y permisos.
        
        
            Esto facilita la verificación masiva de usuarios y permisos,
            ahorrando tiempo y reduciendo errores manuales, y proporciona una
            interfaz de usuario amigable y fácil de usar en la línea de
            comandos.
        
        
            Además, permite la configuración de la API y el tiempo de espera a
            través de variables de entorno.
      `,
      href: '#',
      github: 'https://github.com/Brianleft28/Auth_TEST',
      badge: ['Node', 'Axios', 'chalk', 'cli-table3', 'inquirer'],
      img: [p1_2, p2_2, p3_2, p4_2, p5_2],
    },
    en: {
      id: 3,
      key: 3,
      category: 'backend',
      title: 'Authentication Routine',
      description: `
            This project is a user and permission verification application
            developed in Node.js. It uses various libraries to provide an
            interactive and functional command line interface.
        
        
            The main libraries used are Axios to make HTTP requests to an
            external API, Chalk to style the output in the console with colors,
            cli-table3 to display data in table format in the console, dotenv to
            handle environment variables, and Inquirer to create interactive
            menus in the command line.
        
        
            The application allows for verifying if a user exists and if the
            provided credentials are correct, verifying if a user has certain
            permissions in a specific application, and reading a JSON file with
            multiple users to verify their credentials and permissions.
        
        
            This facilitates the mass verification of users and permissions,
            saving time and reducing manual errors, and provides a friendly and
            easy-to-use user interface on the command line.
        
        
            Additionally, it allows for the configuration of the API and the
            timeout through environment variables.
            `,
      href: '#',
      github: 'https://github.com/Brianleft28/Auth_TEST',
      badge: ['Node', 'Axios', 'chalk', 'cli-table3', 'inquirer'],
      img: [p1_2, p2_2, p3_2, p4_2, p5_2],
    },
  },
  {
    es: {
      id: 4,
      key: 4,
      category: 'frontend',
      title: 'Portfolio De Fotografía',
      description:
        'Este portafolio está desarrollado utilizando React y Vite, proporcionando una configuración rápida y eficiente para el desarrollo de aplicaciones web modernas. La estructura del proyecto está bien organizada, facilitando la mantenibilidad y escalabilidad del código. Utiliza Tailwind CSS para estilos consistentes y modernos, y Framer Motion para animaciones fluidas. El portafolio incluye navegación móvil, rutas animadas y un cursor personalizado, ofreciendo una experiencia de usuario interactiva y atractiva. Además, se implementan contextos de React para manejar estados globales, como el contexto del cursor. Este proyecto es una excelente muestra de habilidades en desarrollo frontend moderno, utilizando las mejores prácticas y herramientas actuales.',
      href: 'https://www.google.com',
      github: 'https://github.com/Brianleft28/photo-react',
      badge: ['React', 'Tailwind', 'Framer Motion'],
      img: [fotografia, fotografia1, fotografia2, fotografia3],
    },
    en: {
      id: 4,
      key: 4,
      category: 'frontend',
      title: 'Photography Portfolio',
      description:
        'This portfolio is developed using React and Vite, providing a quick and efficient setup for the development of modern web applications. The project structure is well organized, facilitating code maintainability and scalability. It uses Tailwind CSS for consistent and modern styles, and Framer Motion for smooth animations. The portfolio includes mobile navigation, animated routes, and a custom cursor, offering an interactive and engaging user experience. Additionally, React contexts are implemented to handle global states, such as the cursor context. This project is an excellent showcase of skills in modern frontend development, using current best practices and tools.',
      href: 'https://www.google.com',
      github: 'https://github.com/Brianleft28/photo-react',
      badge: ['React', 'Tailwind', 'Framer Motion'],
      img: [fotografia, fotografia1, fotografia2, fotografia3],
    },
  },
  {
    es: {
      id: 5,
      key: 5,
      category: 'backend',
      title: 'Automatizando Migración de Datos',
      description:
       ` 
        En el mundo de la gestión de datos, la eficiencia y la precisión son clave. Este proyecto, titulado Migración Mensual de Beneficiarios, aborda precisamente estos desafíos al automatizar la migración de datos de beneficiarios desde archivos Excel a una base de datos MySQL. 
        El proyecto se diseñó para leer datos desde archivos Excel, formatearlos adecuadamente y migrarlos a una base de datos MySQL.      
        Para llevar a cabo este proyecto, se utilizaron varias tecnologías y librerías. Node.js, como entorno de ejecución para JavaScript en el servidor.
        MySQL, como sistema de gestión de bases de datos relacional.
        ExcelJS fue la librería para leer, manipular y escribir archivos Excel.
        Inquirer es la librería para crear interfaces de usuario interactivas en la línea de comandos.
        Chalk es una librería para estilizar la salida en la consola.        
        `,
      href: 'https://www.google.com',
      badge: ['Node', 'Exceljs', 'Inquirer', 'MySQL'],
      github: '',
      img: [migracion, migracion1, migracion2],
    },
    en: {
      id: 5,
      key: 5,
      category: 'backend',
      title: 'Automating Data Migration',
      description:
        `In the world of data management, efficiency and accuracy are key. This project, titled Monthly Beneficiary Migration, addresses precisely these challenges by automating the migration of beneficiary data from Excel files to a MySQL database.
        The project was designed to read data from Excel files, format it properly, and migrate it to a MySQL database.
        To carry out this project, several technologies and libraries were used. Node.js, as the runtime environment for JavaScript on the server.
        MySQL, as a relational database management system.
        ExcelJS was the library for reading, manipulating, and writing Excel files.
        Inquirer is the library for creating interactive user interfaces on the command line.
        Chalk is a library for styling the output in the console.
        `,
      href: 'https://www.google.com',
      badge: ['Node', 'Exceljs', 'Inquirer', 'MySQL'],
      github: '',
      img: [migracion, migracion1, migracion2],

    }
  }
];
