import { assets } from "../assets/assets";

export default function About() {
  return (
    <div className="relative w-full h-screen">
      {/* Imagem de fundo */}
      <img
        src={assets.about_img}
        alt="imagem de sobre da loja"
        className="absolute top-0 left-0 w-full h-full object-cover sm:object-contain bg-black/90 opacity-25"
      />

      {/* Conteúdo sobreposto */}
      <div className="absolute bottom-0 left-0 text-white text-left p-8">
        <h2 className="text-4xl font-bold mb-4">About Us | 4NF</h2>
        <p className="text-lg mb-8">
          At 4NF, we’re all about style with purpose. Inspired by technology,
          minimalism, and the future, we create t-shirts that aren’t just
          fashion—they’re a statement.
        </p>
        <a href="#" className="bg-white mt-12 text-black px-9 rounded-md text-lg font-black py-4 hover:bg-transparent hover:text-white border hover:border-white duration-300 ease-in-out">About Us</a>
      </div>
    </div>
  );
}
