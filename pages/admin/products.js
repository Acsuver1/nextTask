import { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';
import ProductCard from '../../components/ProductCard';

const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching admin products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      {loading ? (
        <div className="flex flex-col items-center justify-center h-64">
          <div className="animate-spin rounded-full border-t-4 border-b-4 border-blue-600 h-16 w-16 mb-4"></div>
          <span className="text-lg text-gray-700 animate-pulse">Loading products...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminProducts;
