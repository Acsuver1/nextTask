import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Loading from '../../components/Loading'; // Import the Loading component

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="relative">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        {loading ? (
          <Loading /> 
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
