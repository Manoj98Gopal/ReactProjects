import { useEffect, useState } from "react";
import WithBorder from "./basicHoc/WithBorder";
import ProductList from "./loaderHoc/ProductList";
import WithLoader from "./loaderHoc/WithLoader";
import UserCard from "./basicHoc/UserCard";
import DashBoard from "./protectedHoc/DashBoard";
import WithAuth from "./protectedHoc/WithAuth";
import UserProfile from "./loggerHoc/UserProfile";
import WithLogger from "./loggerHoc/WithLogger";

const productList = [
  { id: 1, name: "Phone", description: "phone is a mobile device " },
  { id: 2, name: "Laptop", description: "Laptop is a portable computer" },
  { id: 3, name: "Tablet", description: "Tablet is a touchscreen computer" }
];

const EnhancedUserCard = WithBorder(UserCard);
const LoaderWithProductList = WithLoader(ProductList);
const ProtectedDashBoard = WithAuth(DashBoard);
const LoggerUserProfile = WithLogger(UserProfile);

const HOCPattern = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="mt-8 space-y-6">
      <div>
        <h1 className="text-xl font-bold mb-2">
          Higher-Order Component (HOC) Pattern Example
        </h1>
        <EnhancedUserCard name="John Doe" />
      </div>

      <div>
        <h1 className="text-xl font-bold mb-2">Product list</h1>
        <LoaderWithProductList list={productList} isLoading={loading} />
      </div>

      <div className="border p-4">
        <h1 className="text-xl font-bold mb-2">Protecting Dashboard</h1>
        <ProtectedDashBoard />
      </div>

      <div className="border p-4">
        <h1 className="text-xl font-bold mb-2">Logger example</h1>
        <LoggerUserProfile />
      </div>
    </div>
  );
};

export default HOCPattern;
