
import { products } from "../assets/assets"; 

function Collection() {
    return (
        <div className="w-full text-white">
            {/* Cabeçalho da coleção */}
            <div className="container mx-auto text-center py-16 mt-10">
                <h2 className="text-5xl text-start pl-6 font-bold">NEW COLLECTION</h2>
                <p className="text-2xl text-start pl-6 font-light py-4 px-0.5">
                    Level up your wardrobe with our latest release
                </p>
                <a className="text-blue-400 px-4 underline" href="#">
                    View the Collection
                </a>
            </div>

            {/* Grid de produtos */}
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {products.map((product) => (
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

export default Collection;
