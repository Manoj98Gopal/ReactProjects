import ProductList from "../components/ProductList";
import AddProductModal from "../components/AddProductModal";

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <ProductList />
      <AddProductModal />
    </main>
  );
};

export default Home;
