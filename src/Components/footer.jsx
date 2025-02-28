import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import {
  FaRocket,
  FaLock,
  FaFire,
  FaPhoneAlt,
  FaStar,
  FaShippingFast,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
  FaBarcode,
} from "react-icons/fa";

const marqueeTexts = [
  { icon: <FaShippingFast />, text: "Delivery Rápido" },
  { icon: <FaLock />, text: "Seu Pagamento Seguro" },
  { icon: <FaFire />, text: "Novas Ofertas Toda Semana" },
  { icon: <FaPhoneAlt />, text: "Suporte 24/7" },
  { icon: <FaStar />, text: "Qualidade Garantida" },
  { icon: <FaRocket />, text: "Promoções Exclusivas" },
  { icon: <FaLock />, text: "Pagamentos Seguros e Garantidos" },
  { icon: <FaPhoneAlt />, text: "Atendimento 24h por dia" },
  { icon: <FaRocket />, text: "Envio Rápido e Seguro" },
  { icon: <FaFire />, text: "Ofertas Imperdíveis" },
];

function Footer() {
  return (
    <div className="w-full mt-20 bg-black text-white">
      {/* Imagem no topo do footer */}
      <div className="w-full">
        <img src={assets.footerhero} alt="Footer Banner" className="w-full" />
      </div>

      {/* Marquee animado com Framer Motion */}
      <div className="overflow-hidden bg-black py-4">
      <motion.div
        className="flex space-x-12 text-lg font-semibold"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          duration: 20,  
          ease: "linear", 
        }}
      >
        {marqueeTexts.map((item, index) => (
          <span key={index} className="flex items-center px-8 whitespace-nowrap">
            <span className="mr-2">{item.icon}</span>
            {item.text}
          </span>
        ))}
      </motion.div>
    </div>
      {/* Seção de Links e Informações */}
      <div className="container mx-auto py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1: Links rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Coleção
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contato
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Suporte
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 2: Mídias Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Mídias Sociais</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Ajuda */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Ajuda</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Política de Privacidade
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Termos de Serviço
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer inferior */}
      <footer className="text-center py-4 bg-black text-gray-400 text-sm">
        &copy; 2025 Todos os direitos reservados. Feito por Pedro.
        <div className="mt-4 flex justify-center space-x-6">
          <FaCcVisa size={30} className="text-white hover:text-gray-400" />
          <FaCcMastercard
            size={30}
            className="text-white hover:text-gray-400"
          />
          <FaPaypal size={30} className="text-white hover:text-gray-400" />
          <FaBarcode size={30} className="text-white hover:text-gray-400" />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
