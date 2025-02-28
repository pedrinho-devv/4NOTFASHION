import { assets } from "../assets/assets";

function MW() {
  return (
    <div className="w-full h-full px-5 py-7 mt-48">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Card Men */}
        <div className="relative w-full sm:w-1/2 h-[500px] overflow-hidden group">
          <img
            src={assets.men}
            alt="Men"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay e botão */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href="/men"
              className="bg-white text-black px-6 py-3 rounded-md text-lg font-bold uppercase
                        hover:bg-transparent hover:text-white border-2 border-white transition duration-300"
            >
              Men
            </a>
          </div>
        </div>

        {/* Card Woman */}
        <div className="relative w-full sm:w-1/2 h-[500px] overflow-hidden group">
          <img
            src={assets.woman}
            alt="Woman"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {/* Overlay e botão */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <a
              href="/woman"
              className="bg-white text-black px-6 py-3 rounded-md text-lg font-bold uppercase
                        hover:bg-transparent hover:text-white border-2 border-white transition duration-300"
            >
              Woman
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MW;
