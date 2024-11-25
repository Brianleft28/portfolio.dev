import backgroundServices from '../../../img/background-services/services.bg.jpg';

const HeroServicesHeader = () => {
  return (
    <div
      className="relative mt-22 w-screen h-40 border-content2 border-t-8 border-b-8 flex items-center justify-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundServices})` }} 
    >
      <div 
      className="absolute inset-0 bg-background opacity-50"></div>
      </div>
  );
};

export default HeroServicesHeader;