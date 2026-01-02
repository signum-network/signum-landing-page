import patternUrl from "../assets/img/background/SignumChainBlue.svg";

export const BackgroundLogo = () => {
  return (
    <img
      src={patternUrl}
      alt="Signum Netwwork"
      className="
        absolute top-[800px] left-0 -translate-x-1/2 -z-10  
        w-180 h-auto
        opacity-90 pointer-events-none select-none
        hidden md:block            
        transition-transform duration-700 ease-out
        md:translate-x-[-90%]      
        lg:translate-x-[-80%]        
        xl:translate-x-[-75%]       
        2xl:translate-x-[-50%]       
        "
    />
  );
};
