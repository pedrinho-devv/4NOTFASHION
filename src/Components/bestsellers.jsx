import { products } from "../assets/assets"; 

function Bests() {
    // Filtrando apenas os bestsellers
    const bestSellers = products.filter(product => product.bestseller);

    return (
        <div className="w-full text-white mt-20">
            {/* Cabeçalho da coleção */}
            <div className="container mx-auto text-center py-16 mt-10">
                <h2 className="text-5xl text-start pl-6 font-bold">BEST SELLERS</h2>
                <p className="text-2xl text-start pl-6 font-light py-4 px-0.5">
                    Our most loved pieces, picked by you!
                </p>
                <a className="text-blue-400 px-4 underline" href="#">
                    View Full Collection
                </a>
            </div>

            {/* Grid de Best Sellers */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {bestSellers.map((product) => (
                    <div key={product._id} className="bg-black/20 p-4 rounded-lg shadow-lg">
                        <img
                            src={product.image[0]} 
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-md"
                        />
                        <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                        <p className="text-gray-400 text-sm mt-2">{product.description}</p>
                        <p className="text-lg font-bold text-gray-600 mt-2">R$ {product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Bests;
