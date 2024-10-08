const ProductCard = ({ product }) => {
    return (
      <div className="border rounded shadow p-4">
        <img src={product.image} alt={product.title} className="h-40 w-full object-contain mb-4" />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-700">${product.price}</p>
      </div>
    );
  };
  
  export default ProductCard;
  