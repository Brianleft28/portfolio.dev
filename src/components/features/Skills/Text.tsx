import { Skill } from '../../../types';

export const texts = {
  en: {
    title: {
      main: 'Skills',
      secondary: 'Ability tree',
    },
  },
  es: {
    title: {
      main: 'Habilidades',
      secondary: 'Árbol de habilidades',
    },
  },
};
export const skills: Skill[] = [
  {
    es: {
      id: 1,
      name: 'Frontend',
      description:
        'Desarrollo aplicaciones web utilizando frameworks como React y Svelte, enfocándome en la creación de interfaces de usuario eficientes y reutilizables, con un manejo cuidadoso del estado y la interactividad.',
      img: 'https://imakestuff.online/wp-content/uploads/2019/12/HTML-CSS-JS-Logo.png',
      subSkills: [
        {
          id: 2,
          name: 'React',
          description:
            'Biblioteca especializada para la creación de interfaces de usuario dinámicas y modulares, donde priorizo la reutilización de componentes, el manejo eficiente del estado con hooks y context API, y la integración fluida de TypeScript para garantizar tipado estático y robustez en el desarrollo.',
          subSkills: [
            {
              id: 9,
              name: 'React Router',
              description:
                'Manejo avanzado del enrutamiento en aplicaciones React, estructurando rutas anidadas y dinámicas. Uso de la API de Hooks como `useParams` y `useNavigate` para acceder a información de rutas y redireccionamientos, optimizando la navegación sin recargar la página, y asegurando una experiencia fluida en aplicaciones single-page (SPA).',
              subSkills: [],
            },
            {
              id: 10,
              name: 'Redux',
              description:
                'Gestión global del estado de la aplicación utilizando Redux, optimizando la manipulación del estado en aplicaciones de React. Manejo de side effects con middleware como Redux Thunk, estructurando la lógica de la aplicación para mantener el estado centralizado y consistente a través de componentes complejos. Además, aplico buenas prácticas para la normalización de datos y la persistencia del estado en local storage cuando es necesario.',
              subSkills: [],
            },
            {
              id: 11,
              name: 'Styled Components',
              description:
                'Estilización de componentes con Styled Components, utilizando CSS-in-JS para crear estilos reutilizables y encapsulados en componentes de React. Uso de propiedades dinámicas y temas para personalizar la apariencia de la aplicación, y aplicar estilos responsivos con media queries y CSS variables.',
              subSkills: [],
            },
            {
              id: 14,
              name: 'Framer Motion',
              description:
                'Creación de animaciones y transiciones en aplicaciones React con Framer Motion, utilizando la API de animación declarativa para crear efectos visuales atractivos y dinámicos. Uso de propiedades como `animate`, `transition`, y `variants` para personalizar la animación de componentes y mejorar la experiencia del usuario.',
              subSkills: [],
            },
            {
              id: 12,
              name: 'Performance',
              description:
                'Optimización del rendimiento en aplicaciones React, aplicando buenas prácticas para reducir el tiempo de carga y mejorar la experiencia del usuario. Uso de React.memo y useMemo para evitar renders innecesarios, y lazy loading para cargar componentes de manera diferida y mejorar la velocidad de carga de la aplicación.',
              subSkills: [],
            },
          ],
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQFtEyXJg4vHdkl_XpdTlwMRzJOg_9g5uhQ&s',
        },
        {
          id: 3,
          name: 'Svelte',
          description:
            'Framework de JavaScript altamente eficiente y reactivo, ideal para construir interfaces de usuario rápidas y optimizadas. Utilizo Svelte para crear aplicaciones que minimizan el tamaño del bundle y mejoran el rendimiento gracias a su enfoque de compilación. Aprovecho su sistema de reactividad automática y el manejo de estado sin necesidad de librerías adicionales, garantizando una experiencia de desarrollo más limpia y sencilla. Svelte permite trabajar con menos código boilerplate, logrando aplicaciones más rápidas y con un menor consumo de recursos.',
          subSkills: [
            {
              id: 15,
              name: 'SvelteKit',
              description:
                'Framework basado en Svelte para crear aplicaciones web completas con enrutamiento, renderizado en el servidor (SSR), y generación de sitios estáticos (SSG). Utilizo SvelteKit para desarrollar aplicaciones web escalables y de alto rendimiento, con una arquitectura modular y flexible. Aprovecho las ventajas de SvelteKit para mejorar la velocidad de carga de la aplicación, optimizar el SEO, y facilitar la creación de páginas estáticas y dinámicas con un enfoque centrado en el usuario.',
              subSkills: [],
            },
            {
              id: 16,
              name: 'Stores',
              description:
                'Gestión del estado en aplicaciones Svelte con Stores, utilizando la API de reactividad de Svelte para crear almacenes de datos reactivos y compartidos entre componentes. Implemento Stores para centralizar la lógica de la aplicación y mantener un estado consistente a través de la interfaz de usuario, evitando problemas de sincronización y redundancia de datos. Además, utilizo Stores para gestionar el estado global de la aplicación y mejorar la escalabilidad y mantenibilidad del código.',
              subSkills: [],
            },
            {
              id: 17,
              name: 'Transiciones',
              description:
                'Creación de animaciones y transiciones en aplicaciones Svelte con la API de transiciones, utilizando las directivas `in:` y `out:` para animar la entrada y salida de elementos en la interfaz de usuario. Implemento transiciones para mejorar la experiencia del usuario y crear efectos visuales atractivos, con opciones de personalización y control sobre la duración, el retraso, y la interpolación de las animaciones.',
              subSkills: [],
            },
            {
              id: 18,
              name: 'Componentes',
              description:
                'Desarrollo de componentes reutilizables en Svelte, utilizando la estructura de archivos y carpetas recomendada por la documentación oficial. Creo componentes modulares y encapsulados, con un enfoque en la reutilización y la composición de elementos para construir interfaces de usuario flexibles y fáciles de mantener. Utilizo propiedades y eventos para la comunicación entre componentes, y aplico buenas prácticas de diseño para mejorar la legibilidad y la escalabilidad del código.',
              subSkills: [],
            },
          ],
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLXF8VSI5tMlBTfy-9UDvnO6OGMOvgGFz5g&s',
        },
      ],
    },
    en: {
      id: 1,
      name: 'Frontend',
      description:
        'I develop web applications using frameworks like React and Svelte, focusing on creating efficient and reusable user interfaces, with careful management of state and interactivity.',
      img: 'https://imakestuff.online/wp-content/uploads/2019/12/HTML-CSS-JS-Logo.png',
      subSkills: [
        {
          id: 2,
          name: 'React',
          description:
            'Specialized library for creating dynamic and modular user interfaces, where I prioritize the reuse of components, efficient state management with hooks and context API, and seamless integration of TypeScript to ensure static typing and robustness in development.',
          subSkills: [
            {
              id: 9,
              name: 'React Router',
              description:
                'Advanced handling of routing in React applications, structuring nested and dynamic routes. Use of Hooks API like `useParams` and `useNavigate` to access route information and redirections, optimizing navigation without reloading the page, and ensuring a smooth experience in single-page applications (SPA).',
              subSkills: [],
            },
            {
              id: 10,
              name: 'Redux',
              description:
                'Global state management of the application using Redux, optimizing state manipulation in React applications. Handling side effects with middleware like Redux Thunk, structuring the application logic to keep the state centralized and consistent across complex components. In addition, I apply good practices for data normalization and state persistence in local storage when necessary.',
              subSkills: [],
            },
            {
              id: 11,
              name: 'Styled Components',
              description:
                'Styling components with Styled Components, using CSS-in-JS to create reusable and encapsulated styles in React components. Use of dynamic properties and themes to customize the appearance of the application, and apply responsive styles with media queries and CSS variables.',
              subSkills: [],
            },
            {
              id: 14,
              name: 'Framer Motion',
              description:
                'Creation of animations and transitions in React applications with Framer Motion, using the declarative animation API to create attractive and dynamic visual effects. Use of properties like `animate`, `transition`, and `variants` to customize component animation and improve the user experience.',
              subSkills: [],
            },
            {
              id: 12,
              name: 'Performance',
              description:
                'Performance optimization in React applications, applying good practices to reduce loading time and improve user experience. Use of React.memo and useMemo to avoid unnecessary renders, and lazy loading to load components deferredly and improve application loading speed.',
              subSkills: [],
            },
          ],
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjQFtEyXJg4vHdkl_XpdTlwMRzJOg_9g5uhQ&s',
        },
        {
          id: 3,
          name: 'Svelte',
          description:
            'Highly efficient and reactive JavaScript framework, ideal for building fast and optimized user interfaces. I use Svelte to create applications that minimize bundle size and improve performance thanks to its compilation approach. I take advantage of its automatic reactivity system and state management without the need for additional libraries, ensuring a cleaner and simpler development experience. Svelte allows working with less boilerplate code, achieving faster applications with lower resource consumption.',
          subSkills: [
            {
              id: 15,
              name: 'SvelteKit',
              description:
                'Framework based on Svelte to create complete web applications with routing, server-side rendering (SSR), and static site generation (SSG). I use SvelteKit to develop scalable and high-performance web applications, with a modular and flexible architecture. I take advantage of SvelteKit benefits to improve application loading speed, optimize SEO, and facilitate the creation of static and dynamic pages with a user-centered approach.',
              subSkills: [],
            },
            {
              id: 16,
              name: 'Stores',
              description:
                'State management in Svelte applications with Stores, using Svelte reactivity API to create reactive data stores shared between components. I implement Stores to centralize application logic and maintain consistent state across the user interface, avoiding synchronization issues and data redundancy. In addition, I use Stores to manage the global state of the application and improve code scalability and maintainability.',
              subSkills: [],
            },
            {
              id: 17,
              name: 'Transitions',
              description:
                'Creating animations and transitions in Svelte applications with the transitions API, using the `in:` and `out:` directives to animate the entry and exit of elements in the user interface. I implement transitions to improve user experience and create attractive visual effects, with customization options and control over animation duration, delay, and interpolation.',
              subSkills: [],
            },
            {
              id: 18,
              name: 'Components',
              description:
                'Development of reusable components in Svelte, using the file and folder structure recommended by the official documentation. I create modular and encapsulated components, with a focus on reusability and element composition to build flexible and easy-to-maintain user interfaces. I use properties and events for communication between components, and apply good design practices to improve code readability and scalability.',
              subSkills: [],
            },
          ],
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRLXF8VSI5tMlBTfy-9UDvnO6OGMOvgGFz5g&s',
        },
      ],
    },
  },
  {
    es: {
      id: 5,
      name: 'Backend',
      description:
        'Desarrollo aplicaciones del lado del servidor con Node.js, Express y MongoDB, siguiendo patrones de arquitectura como MVC y Clean Architecture para garantizar código modular y mantenible. Me especializo en la creación de APIs REST y en la gestión eficiente de bases de datos SQL y NoSQL.',
      img: 'https://cdn-icons-png.flaticon.com/512/6213/6213731.png',
      subSkills: [
        {
          id: 6,
          name: 'Node.js',
          description:
            'Utilizo Node.js para construir aplicaciones backend escalables y eficientes, enfocándome en la creación de APIs REST y la gestión eficiente de servidores a través de asincronía y eventos.',
          subSkills: [
            {
              id: 19,
              name: 'Arquitectura y Patrones de Diseño',
              description:
                'Utilizo patrones de diseño como MVC y Singleton para estructurar el código de manera eficiente. Además, implemento arquitecturas avanzadas como Clean Architecture e Inyección de Dependencias, lo que me permite construir aplicaciones altamente escalables, mantenibles y flexibles. Estas arquitecturas favorecen la separación de responsabilidades y el desacoplamiento de dependencias, mejorando la testabilidad y facilitando la evolución de la aplicación sin comprometer la estabilidad del sistema.',
              subSkills: [],
            },
            {
              id: 23,
              name: 'Instancias y Clases',
              description:
                'Creación de instancias y clases en Node.js para estructurar el código de manera orientada a objetos. Utilizo clases y métodos para encapsular la lógica de negocio y mejorar la reutilización y mantenibilidad del código. Además, implemento herencia y polimorfismo para extender la funcionalidad de las clases de forma eficiente y escalable.',
              subSkills: [],
            },
            {
              id: 24,
              name: 'TypeScript',
              description:
                'Uso de TypeScript en aplicaciones Node.js para garantizar tipado estático y robustez en el desarrollo. Utilizo interfaces y tipos para definir la forma de los datos (DTO) y mejorar la legibilidad y mantenibilidad del código. Además, aplico decoradores y genéricos para extender la funcionalidad de las clases y métodos, y mejorar la escalabilidad y reusabilidad del código.',
              subSkills: [],
            },
            {
              id: 20,
              name: 'Modulo FS',
              description:
                'Manejo de archivos y directorios en Node.js con el módulo FS, utilizando operaciones asíncronas y síncronas para leer, escribir, y manipular archivos del sistema. Implemento operaciones CRUD en archivos y directorios, siguiendo buenas prácticas de seguridad y rendimiento. Además, utilizo Streams para leer y escribir datos de manera eficiente, y manejo errores y excepciones de forma segura y standarizada.',
              subSkills: [],
            },
            {
              id: 21,
              name: 'Express',
              description:
                'Desarrollo de APIs REST con Express, utilizando middlewares y enrutadores para gestionar peticiones HTTP de manera eficiente. Implemento rutas y controladores para separar la lógica de negocio de la capa de presentación, siguiendo buenas prácticas de diseño y arquitectura. Además, utilizo Express para manejar errores y excepciones de forma segura y standarizada, garantizando la integridad y disponibilidad de la aplicación.',
              subSkills: [],
            },
            {
              id: 22,
              name: 'mysql2/promises',
              description:
                'Conexión y consulta a bases de datos SQL con mysql2 y promesas, utilizando queries parametrizadas y transacciones para garantizar la seguridad y consistencia de los datos. Implemento operaciones CRUD y consultas complejas en bases de datos relacionales, siguiendo buenas prácticas de seguridad y rendimiento.',
              subSkills: [],
            },
            {
              id: 25,
              name: 'Inquirer',
              description:
                'Interacción con el usuario en aplicaciones Node.js con Inquirer, utilizando prompts y respuestas para crear interfaces de línea de comandos interactivas. Implemento preguntas y validaciones para guiar al usuario en la interacción con la aplicación, y manejo errores y excepciones de forma segura y standarizada.',
              subSkills: [],
            },
            {
              id: 26,
              name: 'ExcelJS',
              description:
                'Generación de archivos Excel en aplicaciones Node.js con ExcelJS, utilizando hojas de cálculo y celdas para crear y manipular documentos Excel. Implemento operaciones de lectura y escritura en archivos Excel, siguiendo buenas prácticas de rendimiento y compatibilidad. Además, utilizo estilos y formatos para personalizar la apariencia de los documentos y mejorar la presentación de los datos.',
              subSkills: [],
            },
            {
              id: 27,
              name: 'Zod',
              description:
                'Validación de datos en aplicaciones Node.js con Zod, utilizando esquemas y validadores para garantizar la integridad y consistencia de los datos. Implemento validaciones de tipos y formatos de datos, siguiendo buenas prácticas de seguridad y rendimiento. Además, utilizo Zod para gestionar errores y excepciones de forma segura y standarizada, mejorando la calidad y confiabilidad de la aplicación.',
              subSkills: [],
            },
            {
              id: 28,
              name: 'Jest',
              description:
                'Pruebas unitarias e integración en aplicaciones Node.js con Jest, utilizando mocks y spies para simular comportamientos y eventos. Implemento pruebas de regresión para garantizar la estabilidad de la aplicación en diferentes escenarios, y mejoro la calidad del código con pruebas automatizadas y cobertura de código.',
              subSkills: [],
            },
          ],
          img: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
        },
        {
          id: 3,
          name: 'Base de Datos',
          description:
            'Diseño y gestión de bases de datos relacionales y NoSQL, utilizando tecnologías como MySQL, MongoDB. Me especializo en la creación de esquemas eficientes y normalizados, la optimización de consultas y la implementación de operaciones CRUD seguras y consistentes.',
          img: 'https://c0.klipartz.com/pngpicture/883/7/gratis-png-gestion-de-datos-de-los-iconos-de-la-base-de-datos-icono-del-kit-de-herramientas-thumbnail.png',
          subSkills: [
            {
              id: 7,
              name: 'MySQL',
              description:
                'Gestión de bases de datos relacionales con MySQL, utilizando consultas SQL para crear, leer, actualizar y eliminar datos. Implemento esquemas normalizados y relaciones entre tablas para garantizar la integridad y consistencia de los datos. Además, utilizo índices, vistas, joins y transacciones para optimizar consultas y mejorar el rendimiento de la base de datos.',
              subSkills: [],
            },
            {
              id: 8,
              name: 'MongoDB',
              description:
                'Diseño de bases de datos NoSQL con MongoDB, utilizando colecciones y documentos para almacenar datos de forma flexible y escalable. Implemento consultas y operaciones CRUD en MongoDB, siguiendo buenas prácticas de modelado de datos y rendimiento. Además, utilizo índices y agregaciones para optimizar consultas y mejorar la eficiencia de la base de datos.',
              subSkills: [],
            },
          ],
        },
        {
          id: 4,
          name: 'TypeScript',
          description:
            'Uso de TypeScript en aplicaciones Node.js para garantizar tipado estático y robustez en el desarrollo. Utilizo interfaces y tipos para definir la forma de los datos (DTO) y mejorar la legibilidad y mantenibilidad del código. Además, aplico decoradores y genéricos para extender la funcionalidad de las clases y métodos, y mejorar la escalabilidad y reusabilidad del código.',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
          subSkills: [
            {
              id: 13,
              name: 'Interfaces y Tipos',
              description:
                'Definición de interfaces y tipos en TypeScript para garantizar la forma y estructura de los datos en aplicaciones Node.js. Utilizo interfaces para describir la forma de los objetos y tipos para definir estructuras de datos complejas, mejorando la legibilidad y mantenibilidad del código. Además, aplico tipos de unión y tipos genéricos para extender la funcionalidad de las interfaces y tipos, y mejorar la escalabilidad y reusabilidad del código.',
              subSkills: [],
            },
            {
              id: 30,
              name: 'Decoradores y Genéricos',
              description:
                'Uso de decoradores y genéricos en TypeScript para extender la funcionalidad de las clases y métodos. Implemento decoradores para añadir metadatos y funcionalidades adicionales a las clases y métodos, y aplico genéricos para definir tipos de datos flexibles y reutilizables. Además, utilizo decoradores de clase y método para mejorar la legibilidad y mantenibilidad del código, y aplico genéricos condicionales para crear tipos de datos condicionales y flexibles.',
              subSkills: [],
            },
            {
              id: 31,
              name: 'Tipado Estático',
              description:
                'Garantía de tipado estático en aplicaciones Node.js con TypeScript, utilizando la inferencia de tipos y la anotación de tipos para definir la forma y estructura de los datos. Implemento tipado estático en parámetros de funciones y valores de retorno, mejorando la robustez y confiabilidad del código. Además, utilizo tipos de datos primitivos y complejos para describir la forma de los datos y evitar errores de tipo en tiempo de ejecución.',
              subSkills: [],
            },
          ],
        },
        {
          id: 7,
          name: 'Postman',
          description:
            'Testing de APIs con Postman, utilizando colecciones y entornos para automatizar pruebas y validar el comportamiento de las APIs. Realizo pruebas de integración y validación de endpoints, y genero documentación de APIs para facilitar su consumo y comprensión.',
          subSkills: [],
          img: 'https://yt3.googleusercontent.com/X-rhKMndFm9hT9wIaJns1StBfGbFdLTkAROwm4UZ3n9ucrBky5CFIeeZhSszFXBgQjItzCD0SA=s900-c-k-c0x00ffffff-no-rj',
        },
      ],
    },
    en: {
      id: 5,
      name: 'Backend',
      description:
        'Development of robust and scalable server-side applications using Node.js, Express, and MongoDB. I implement architectures based on patterns like MVC and Clean Architecture to ensure modular and maintainable code. I specialize in creating efficient REST APIs, handling authentication, and optimizing queries to SQL and NoSQL databases.',
      img: 'https://cdn-icons-png.flaticon.com/512/6213/6213731.png',
      subSkills: [
        {
          id: 6,
          name: 'Node.js',
          description:
            'I use Node.js to build scalable and efficient backend applications, focusing on creating REST APIs and efficient server management through asynchrony and events.',
          subSkills: [
            {
              id: 19,
              name: 'Architecture and Design Patterns',
              description:
                'I use design patterns like MVC and Singleton to structure the code efficiently. I also implement advanced architectures like Clean Architecture and Dependency Injection, allowing me to build highly scalable, maintainable, and flexible applications. These architectures favor the separation of responsibilities and decoupling of dependencies, improving testability and facilitating application evolution without compromising system stability.',
              subSkills: [],
            },
            {
              id: 23,
              name: 'Instances and Classes',
              description:
                'Creation of instances and classes in Node.js to structure the code in an object-oriented way. I use classes and methods to encapsulate business logic and improve code reusability and maintainability. In addition, I implement inheritance and polymorphism to extend class functionality efficiently and scalably.',
              subSkills: [],
            },
            {
              id: 24,
              name: 'TypeScript',
              description:
                'Use of TypeScript in Node.js applications to ensure static typing and robustness in development. I use interfaces and types to define data shape (DTO) and improve code readability and maintainability. In addition, I apply decorators and generics to extend class and method functionality, and improve code scalability and reusability.',
              subSkills: [],
            },
            {
              id: 20,
              name: 'FS Module',
              description:
                'File and directory handling in Node.js with the FS module, using asynchronous and synchronous operations to read, write, and manipulate system files. I implement CRUD operations on files and directories, following good security and performance practices. In addition, I use Streams to read and write data efficiently, and handle errors and exceptions safely and standardized.',
              subSkills: [],
            },
            {
              id: 21,
              name: 'Express',
              description:
                'Development of REST APIs with Express, using middlewares and routers to handle HTTP requests efficiently. I implement routes and controllers to separate business logic from the presentation layer, following good design and architecture practices. In addition, I use Express to handle errors and exceptions safely and standardized, ensuring application integrity and availability.',
              subSkills: [],
            },
            {
              id: 22,
              name: 'mysql2/promises',
              description:
                'Connection and query to SQL databases with mysql2 and promises, using parameterized queries and transactions to ensure data security and consistency. I implement CRUD operations and complex queries on relational databases, following good security and performance practices.',
              subSkills: [],
            },
            {
              id: 25,
              name: 'Inquirer',
              description:
                'User interaction in Node.js applications with Inquirer, using prompts and responses to create interactive command-line interfaces. I implement questions and validations to guide the user in interacting with the application, and handle errors and exceptions safely and standardized.',
              subSkills: [],
            },
            {
              id: 26,
              name: 'ExcelJS',
              description:
                'Generation of Excel files in Node.js applications with ExcelJS, using spreadsheets and cells to create and manipulate Excel documents. I implement read and write operations on Excel files, following good performance and compatibility practices. In addition, I use styles and formats to customize document appearance and improve data presentation.',
              subSkills: [],
            },
            {
              id: 27,
              name: 'Zod',
              description:
                'Data validation in Node.js applications with Zod, using schemas and validators to ensure data integrity and consistency. I implement data type and format validations, following good security and performance practices. In addition, I use Zod to handle errors and exceptions safely and standardized, improving application quality and reliability.',
              subSkills: [],
            },
            {
              id: 28,
              name: 'Jest',
              description:
                'Unit and integration testing in Node.js applications with Jest, using mocks and spies to simulate behaviors and events. I implement regression tests to ensure application stability in different scenarios, and improve code quality with automated tests and code coverage.',
              subSkills: [],
            },
          ],
          img: 'https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png',
        },
        {
          id: 3,
          name: 'Database',
          description:
            'Design and management of relational and NoSQL databases, using technologies like MySQL, MongoDB. I specialize in creating efficient and normalized schemas, optimizing queries, and implementing secure and consistent CRUD operations.',
          img: 'https://c0.klipartz.com/pngpicture/883/7/gratis-png-gestion-de-datos-de-los-iconos-de-la-base-de-datos-icono-del-kit-de-herramientas-thumbnail.png',
          subSkills: [
            {
              id: 7,
              name: 'MySQL',
              description:
                'Management of relational databases with MySQL, using SQL queries to create, read, update, and delete data. I implement normalized schemas and relationships between tables to ensure data integrity and consistency. In addition, I use indexes, views, joins, and transactions to optimize queries and improve database performance.',
              subSkills: [],
            },
            {
              id: 8,
              name: 'MongoDB',
              description:
                'Design of NoSQL databases with MongoDB, using collections and documents to store data flexibly and scalably. I implement queries and CRUD operations in MongoDB, following good data modeling and performance practices. In addition, I use indexes and aggregations to optimize queries and improve database efficiency.',
              subSkills: [],
            },
          ],
        },
        {
          id: 4,
          name: 'TypeScript',
          description:
            'Use of TypeScript in Node.js applications to ensure static typing and robustness in development. I use interfaces and types to define data shape (DTO) and improve code readability and maintainability. In addition, I apply decorators and generics to extend class and method functionality, and improve code scalability and reusability.',
          img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
          subSkills: [
            {
              id: 13,
              name: 'Interfaces and Types',
              description:
                'Definition of interfaces and types in TypeScript to ensure data shape and structure in Node.js applications. I use interfaces to describe object shape and types to define complex data structures, improving code readability and maintainability. In addition, I apply union types and generics to extend interface and type functionality, and improve code scalability and reusability.',
              subSkills: [],
            },
            {
              id: 30,
              name: 'Decorators and Generics',
              description:
                'Use of decorators and generics in TypeScript to extend class and method functionality. I implement decorators to add metadata and additional functionality to classes and methods, and apply generics to define flexible and reusable data types. In addition, I use class and method decorators to improve code readability and maintainability, and apply conditional generics to create conditional and flexible data types.',
              subSkills: [],
            },
            {
              id: 31,
              name: 'Static Typing',
              description:
                'Static typing assurance in Node.js applications with TypeScript, using type inference and type annotation to define data shape and structure. I implement static typing in function parameters and return values, improving code robustness and reliability. In addition, I use primitive and complex data types to describe data shape and avoid type errors at runtime.',
              subSkills: [],
            },
          ],
        },
        {
          id: 7,
          name: 'Postman',
          description:
            'API testing with Postman, using collections and environments to automate tests and validate API behavior. I perform integration tests and endpoint validation, and generate API documentation to facilitate consumption and understanding.',
          subSkills: [],
          img: 'https://yt3.googleusercontent.com/X-rhKMndFm9hT9wIaJns1StBfGbFdLTkAROwm4UZ3n9ucrBky5CFIeeZhSszFXBgQjItzCD0SA=s900-c-k-c0x00ffffff-no-rj',
        },
      ],
    },
  },
  {
    es: {
      id: 4,
      name: 'Otros',
      description:
        'Habilidades adicionales y herramientas que complementan mi perfil profesional.',
      img: 'https://cdn-icons-png.flaticon.com/512/1157/1157109.png ',
      subSkills: [
        {
          id: 29,
          name: 'Git',
          description:
            'Control de versiones con Git, utilizando ramas y commits para gestionar cambios en el código de manera eficiente. Manejo conflictos y resoluciones de merge para mantener la integridad del código y la colaboración en equipo.',
          subSkills: [],
        },
        {
          id: 33,
          name: 'VS Code',
          description:
            'Editor de código Visual Studio Code, utilizando extensiones y configuraciones para mejorar la productividad y la experiencia de desarrollo. Implemento atajos de teclado y snippets para acelerar la escritura de código, y personalizo temas y estilos para adaptar el entorno de trabajo a mis preferencias y necesidades.',
          subSkills: [],
        },
      ],
    },
    en: {
      id: 4,
      name: 'Others',
      description:
        'Additional skills and tools that complement my professional profile.',
      img: 'https://cdn-icons-png.flaticon.com/512/1157/1157109.png',
      subSkills: [
        {
          id: 29,
          name: 'Git',
          description:
            'Version control with Git, using branches and commits to manage code changes efficiently. Handling conflicts and merge resolutions to maintain code integrity and team collaboration.',
          subSkills: [],
        },
        {
          id: 33,
          name: 'VS Code',
          description:
            'Visual Studio Code code editor, using extensions and configurations to improve productivity and development experience. I implement keyboard shortcuts and snippets to speed up code writing, and customize themes and styles to adapt the work environment to my preferences and needs.',
          subSkills: [],
        },
      ],
    },
  },
];
