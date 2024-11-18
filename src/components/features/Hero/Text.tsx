export const texts = {
  en: {
    greeting: "Hello, I'm",
    name: ' Brian Benegas',
    description: (
      <>
      <div className="px-3 md:px-12 py-4 text-foreground">
        <p className="mb-2">
        I'm a software developer with experience in creating scalable and efficient applications. I use <span className="font-bold text-secondary/70">Node.js</span> and <span className="font-bold text-secondary/70">TypeScript</span> to design high-performance <span className="font-bold text-secondary/70">APIs</span>, applying <span className="font-bold text-secondary/70">SOLID</span> principles and scalable architectures. I have the ability to work on projects ranging from <span className="font-bold text-secondary/70">web scraping</span> and console applications to run routines, to APIs with different architectures depending on the type of project.
        </p>
        <p className="mb-2">
        I have solid knowledge in the fundamentals of <span className="font-bold text-secondary/70">OOP</span> and functional programming, allowing me to tackle complex problems with robust and well-structured solutions.
        </p>
        <p className="mb-4">
        My main goal is to develop backend solutions that optimize administrative processes and improve efficiency, applying best practices in each phase of development.
        </p>
      </div>
      </>
    ),
    buttons: {
      contact: {
        label: 'Contact Me',
        href: '/contact',
      },
      work: {
        label: 'View my work', 
  
        href: '/projects',
      },
      cv: {
        label: 'Download CV',
        href: 'https://drive.google.com/file/d/1xd6Ei7uihmoT1QFCS4-LImjEbzA_pJaM/view?usp=sharing',
      },
    },
    subtitle: {
      words: [
        'Software Developer',
        'Node.js Developer',
        'TypeScript Developer',
        'Scalable Architectures',
        'Clean & Efficient Code',
        'Solution Architect',
      ],
    }
    
  },
  es: {
    greeting: 'Hola, soy',
    name: ' Brian Benegas',
    description: (
      <>
      <div className="px-3 md:px-12 py-4 text-foreground">
        <p className="mb-2">
        Soy un desarrollador de software con experiencia en la creación de aplicaciones escalables y eficientes. Utilizo <span className="font-bold text-secondary/70">Node.js</span> y <span className="font-bold text-secondary/70">TypeScript</span> para diseñar <span className="font-bold text-secondary/70">APIs</span> de alto rendimiento, aplicando principios de <span className="font-bold text-secondary/70">SOLID</span> y arquitecturas escalables. Tengo la capacidad de trabajar en proyectos que van desde <span className="font-bold text-secondary/70">web scraping</span> y aplicaciones de consola para ejecutar rutinas, hasta APIs con distintas arquitecturas según el tipo de proyecto.
        </p>
        <p className="mb-2">
        Poseo sólidos conocimientos en los fundamentos de la <span className="font-bold text-secondary/70">POO</span> y la programación funcional, lo que me permite abordar problemas complejos con soluciones robustas y bien estructuradas.
        </p>
        <p className="mb-4">
        Mi objetivo principal es desarrollar soluciones backend que optimicen procesos administrativos y mejoren la eficiencia, aplicando buenas prácticas en cada fase del desarrollo.
        </p>
      </div>

      </>
    ),    
    buttons: {
      contact: {
        label: 'Contáctame',
        href: '/contact',
      },
      work: {
        label: 'Ver mi trabajo',
        href: '/projects',
      },
      cv: {
        label: 'Descargar CV',
        href: 'https://drive.google.com/file/d/1xd6Ei7uihmoT1QFCS4-LImjEbzA_pJaM/view?usp=sharing',
      },
    },
    subtitle: {
      words: [
        'Desarrollador de Software',
        'Desarrollador Node.js',
        'Desarrollador TypeScript',
        'Arquitecturas Escalables',
        'Código Limpio y Eficiente',
        'Arquitecto de Soluciones',
      ],
    }
  },
};

export default texts;
