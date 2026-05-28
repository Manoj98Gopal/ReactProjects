const ProductList = ({ list }) => {
  return (
    <div>
      {list.map((product) => (
        <div
          key={product.id}
          className="border border-gray-300 p-4 rounded-sm mb-4"
        >
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
