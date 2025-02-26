import { IoIosArrowRoundForward } from "react-icons/io";
import Heroimg from "../assets/bannerhero.jpg";
import Navbar from './Navbar'; // Importando o componente Navbar
import HeroSection from './HeroSection'; // Importando o componente HeroSection

function Hero() {
  return (
    <div className="w-full h-screen relative">
      {/* Barra Superior */}
      <div className="bg-[#003469] w-full h-10 flex gap-2 justify-center text-center items-center">
        <p className="text-white">Click your way to the next level.</p>
        <IoIosArrowRoundForward size={30} className="text-white" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-full">
        {/* Imagem de fundo */}
        <img src={Heroimg} className="w-full h-full object-cover" alt="Hero Banner" loading="lazy" />
        {/* Overlay Escuro */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        {/* Conteúdo do Hero */}
        <HeroSection />
      </div>
    </div>
  );
}

export default Hero;
