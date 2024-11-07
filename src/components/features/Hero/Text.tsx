export const texts = {
  en: {
    greeting: "Hello, I'm",
    name: ' Brian Benegas',
    description: (
      <>
        <div className="px-5">
          <p>
            I am a software developer with experience in creating scalable and efficient applications. I use{' '}
            <span className="font-bold">C#</span> and <span className="font-bold">.NET</span> to develop robust solutions, applying{' '}
            <span className="font-bold">OOP</span> principles and architectures based on <span className="font-bold">Clean Architecture</span>.
          </p>
          <p>
            Additionally, I work with <span className="font-bold">Node.js</span> and <span className="font-bold">TypeScript</span> to design{' '}
            <span className="font-bold">high-performance APIs</span>, with a focus on creating clean and well-structured code.
          </p>
          <p>
            My main objective is to develop backend solutions that optimize administrative processes and improve efficiency, applying best practices at every stage of development.
          </p>
          <p>
            I also have experience with <span className="font-bold">Svelte</span>, <span className="font-bold">React</span>, and{' '}
            <span className="font-bold">SvelteKit</span> for developing modern interfaces. However, my focus and passion remain in the design and implementation of scalable backend solutions.
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
        'C# | .NET | Node.js',
        'TypeScript Specialist',
        'Scalable Architectures',
        'Clean & Efficient Code',
        'Robust Solutions',
      ],
    }
    
  },
  es: {
    greeting: 'Hola, soy',
    name: ' Brian Benegas',
    description: (
      <>
        <div className="px-5">
          <p>
            Soy un desarrollador de software con experiencia en la creación de aplicaciones
            escalables y eficientes. Utilizo <span className="font-bold">C#</span> y{' '}
            <span className="font-bold">.NET</span> para el desarrollo de soluciones robustas,
            aplicando principios de <span className="font-bold">POO</span> y arquitecturas basadas
            en <span className="font-bold">Clean Architecture</span>.
          </p>
          <p>
            Además, trabajo con <span className="font-bold">Node.js</span> y{' '}
            <span className="font-bold">TypeScript</span> para diseñar <span className="font-bold">APIs</span>
            de alto rendimiento, manteniendo un enfoque en la creación de código limpio y bien estructurado.
          </p>
          <p>
            Mi objetivo principal es desarrollar soluciones backend que optimicen procesos administrativos
            y mejoren la eficiencia, aplicando buenas prácticas en cada fase del desarrollo.
          </p>
          <p>
            También tengo experiencia en <span className="font-bold">Svelte</span> y {' '}
            <span className="font-bold">React</span> para el
            desarrollo de interfaces modernas, aunque mi enfoque y pasión continúan siendo el diseño y la
            implementación de soluciones backend escalables.
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
        'C# | .NET | Node.js',
        'Especialista en TypeScript',
        'Arquitecturas escalables',
        'Código limpio y eficiente',
        'Soluciones robustas',
      ],
    }
  },
};

export default texts;
