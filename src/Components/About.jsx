import { assets } from "../assets/assets";

export default function About() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      {/* Imagem de fundo */}
      <img
        src={assets.about_img}
        alt="About our store"
        className="absolute top-0 left-0 w-full h-full object-cover bg-black/50 opacity-50"
      />

      {/* Conteúdo sobreposto */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center 
                      w-[90%] max-w-[500px] p-6 sm:p-10 
                      sm:left-10 sm:translate-x-0 sm:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Us | 4NF</h2>
        <p className="text-base sm:text-lg mb-8">
          At 4NF, we’re all about style with purpose. <br /> Inspired by technology,
          minimalism, and the future, we create t-shirts that aren’t just
          fashion—they’re a statement.
        </p>
        <a 
          href="#" 
          className="bg-white text-black px-6 py-3 sm:px-9 sm:py-4 rounded-md text-lg font-black uppercase 
                     hover:bg-transparent hover:text-white border-2 border-white 
                     transition duration-300 ease-in-out inline-block"
        >
          About Us
        </a>
      </div>
    </div>
  );
}
