import backendImg from '../../../img/background-services/services-f-b/backend-services.jpg'
import frontendImg from '../../../img/background-services/services-f-b/frontend-services.jpg'

export const text = 
    {
        es: {
            title: '¿Qué puedo hacer por vos?',
            servicesBackend: (
                <>
                <div className="text-foreground  shadow-lg p-3 bg-content2/30 hover:bg-content1 hover:-translate-y-0.5 transition-all duration-250 ease-soft-spring hover:cursor-pointer selection:bg-transparent  mb-3">
                    <ul className="list-disc pl-6 mb-4">
                        <h2 className="text-xl mb-3 font-semibold">
                            Servicios Backend
                        </h2>
                        <li>Desarrollo de <span className="font-bold text-secondary/70">APIs</span> rápidas, seguras y escalables.</li>
                        <li>Automatización de procesos administrativos y tareas rutinarias.</li>
                        <li>Implementación de soluciones backend que optimizan la eficiencia y el rendimiento.</li>
                        <li>Proyectos específicos como <span className="font-bold text-secondary/70">web scraping</span> o aplicaciones de consola personalizadas.</li>
                    </ul>
                </div>
        </>
        ),
        servicesFrontend: (
            <>
                <div className="text-foreground shadow-lg p-3 bg-content2/30 hover:bg-content1 hover:-translate-y-0.5 transition-all duration-250 ease-soft-spring hover:cursor-pointer selection:bg-transparent  mb-3">
                    <ul className="list-disc pl-6 mb-4">
                        <h2 className="text-xl mb-3 font-semibold">
                            Servicios Frontend
                        </h2>
                        <li>Desarrollo de <span className="font-bold text-secondary/70">interfaces de usuario</span> atractivas y responsivas.</li>
                        <li>Optimización del rendimiento y la velocidad de carga de las aplicaciones web.</li>
                        <li>Implementación de <span className="font-bold text-secondary/70">diseños</span> y <span className="font-bold text-secondary/70">layouts</span> personalizados.</li>
                        <li>Integración de <span className="font-bold text-secondary/70">APIs</span> y servicios de terceros.</li>
                    </ul>
                </div>
            </>
        ),
        backendImg: backendImg,
        frontendImg: frontendImg
    },
    en: {
        title: 'What can I do for you?',
        servicesBackend: (
            <>
            <div className="text-foreground  shadow-lg p-3 bg-content2/30 hover:bg-content1 hover:-translate-y-0.5 transition-all duration-250 ease-soft-spring hover:cursor-pointer selection:bg-transparent  mb-3">
                <ul className="list-disc pl-6 mb-4">
                    <h2 className="text-xl mb-3 font-semibold">
                        Backend Services
                    </h2>
                    <li>Development of fast, secure, and scalable <span className="font-bold text-secondary/70">APIs</span>.</li>
                    <li>Automation of administrative processes and routine tasks.</li>
                    <li>Implementation of backend solutions that optimize efficiency and performance.</li>
                    <li>Specific projects such as <span className="font-bold text-secondary/70">web scraping</span> or custom console applications.</li>
                </ul>
            </div>
    </>
    ),
    servicesFrontend: (
        <>
            <div className="text-foreground shadow-lg p-3 bg-content2/30 hover:bg-content1 hover:-translate-y-0.5 transition-all duration-250 ease-soft-spring hover:cursor-pointer selection:bg-transparent  mb-3">
                <ul className="list-disc pl-6 mb-4">
                    <h2 className="text-xl mb-3 font-semibold">
                        Frontend Services
                    </h2>
                    <li>Development of attractive and responsive <span className="font-bold text-secondary/70">user interfaces</span>.</li>
                    <li>Optimization of performance and loading speed of web applications.</li>
                    <li>Implementation of custom <span className="font-bold text-secondary/70">designs</span> and <span className="font-bold text-secondary/70">layouts</span>.</li>
                    <li>Integration of <span className="font-bold text-secondary/70">APIs</span> and third-party services.</li>
                </ul>
            </div>
        </>
    ),  
    backendImg: backendImg,
    frontendImg: frontendImg
    }
}

