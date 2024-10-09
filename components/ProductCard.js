const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain mb-4 rounded-md"
      />
      <h3 className="text-lg font-semibold text-gray-400 mb-2">{product.title}</h3>
      <p className="text-gray-600 text-lg font-bold">${product.price}</p>
     
    </div>
  );
};

export default ProductCard;
