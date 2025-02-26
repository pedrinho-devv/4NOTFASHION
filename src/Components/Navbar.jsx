import { useState, useEffect } from "react";
import { HiOutlineMenuAlt1, HiXCircle } from "react-icons/hi";
import { BsHandbag } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/4nf.webp";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`absolute top-8 left-0 w-full h-16 flex justify-between items-center px-8 z-20 text-white ${
        scrolled ? "bg-blue-500" : "bg-transparent"
      } transition-colors duration-300`}
    >
      {/* Menu para telas médias e grandes */}
      <ul className="hidden md:flex items-center gap-6 font-semibold">
        <a href="#" className="text-[#A6A6A6] hover:text-gray-300">MEN</a>
        <a href="#" className="text-[#A6A6A6] hover:text-gray-300">WOMEN</a>
      </ul>

      {/* Ícone do Menu para telas pequenas */}
      <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <HiOutlineMenuAlt1 size={30} />
      </div>

      {/* Menu Mobile com animação */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-3/4 h-full bg-black text-white flex flex-col z-1006 items-center gap-6 py-10 shadow-lg"
          >
            <a href="#" className="text-[#A6A6A6] hover:text-gray-300">MEN</a>
            <a href="#" className="text-[#A6A6A6] hover:text-gray-300">WOMEN</a>
            <button
              onClick={() => setMenuOpen(false)}
             
            >
              <HiXCircle  size={'30'}/>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo centralizada */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={Logo} className="w-10 h-10" alt="Logo da marca" />
      </div>

      {/* Carrinho de compras */}
      <div className="flex items-center gap-2 cursor-pointer hover:text-gray-300">
        <BsHandbag size={22} aria-label="Carrinho de compras" />
        <p>(0)</p>
      </div>
    </nav>
  );
}

export default Navbar;
