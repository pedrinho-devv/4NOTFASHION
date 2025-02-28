import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopcontext";
import ProdutoItem from './ProdutoItem';

const ProdutosR = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [relacionado, setRelacionado] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (products && products.length > 0 && category && subCategory) {
      let productsCopia = [...products]; 
      productsCopia = productsCopia.filter((item) => category === item.category);
      productsCopia = productsCopia.filter((item) => subCategory === item.subCategory);

      setRelacionado(productsCopia.slice(0, 5)); 
      setLoading(false); 
    }
  }, [products, category, subCategory]);

  if (loading) return <div>Carregando produtos relacionados...</div>; 

  if (!relacionado.length) return <div>Sem produtos relacionados encontrados.</div>; 

  return (
    <div className="my-20">
      <div className="text-center text-3xl py-2">
       <h2>texte</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {relacionado.map((item) => (
          <ProdutoItem
            key={item._id} 
            id={item._id}
            name={item.name}
            price={item.price}
            image={item.image?.[0] || "/path/to/default-image.jpg"}
          />
        ))}
      </div>
    </div>
  );
};

export default ProdutosR;
