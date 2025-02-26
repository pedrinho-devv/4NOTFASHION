function HeroSection() {
    return (
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center mt-40 px-8 z-10 text-white">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-[600px] text-center md:text-left">
          Level up your style with our collection!
        </h1>
        <p className="text-lg md:text-2xl font-light mt-3 text-center md:text-left">
          Even Gandalf would say, You shall pass to these deals!
        </p>
        <button className="bg-white px-10 py-4 text-2xl text-black mt-5 rounded-2xl" aria-label="Comprar agora">
          SHOP NOW
        </button>
      </div>
    );
  }
  
  export default HeroSection;
  