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
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">
          Higher-Order Component (HOC) Pattern
        </h1>
        <p className="text-gray-700">
          A HOC is a function that takes a component and returns a new enhanced
          component. This page shows the same pattern used for styling, loading
          state, route protection, and render logging.
        </p>

        <div className="border border-gray-300 bg-gray-50 p-4 rounded-sm">
          <p className="font-semibold">Pattern used here:</p>
          <p className="mt-1 text-sm text-gray-700">
            WrappedComponent + HOC function = EnhancedComponent
          </p>
        </div>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">1. Basic HOC: WithBorder</h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">WithBorder</span> receives{" "}
          <span className="font-semibold">UserCard</span> and returns a new
          component with a reusable border around it.
        </p>
        <EnhancedUserCard name="John Doe" />
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">2. Loader HOC: WithLoader</h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">WithLoader</span> checks{" "}
          <span className="font-semibold">isLoading</span>. While it is true,
          it shows a loading message; after two seconds it renders the product
          list.
        </p>
        <LoaderWithProductList list={productList} isLoading={loading} />
      </div>

      <div className="border p-4 space-y-2">
        <h2 className="text-xl font-bold">3. Protected HOC: WithAuth</h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">WithAuth</span> controls access to
          the dashboard and passes dummy user data as props when the user is
          authenticated.
        </p>
        <ProtectedDashBoard />
      </div>

      <div className="border p-4 space-y-2">
        <h2 className="text-xl font-bold">4. Logger HOC: WithLogger</h2>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">WithLogger</span> wraps the user
          profile and logs the render count, component name, and props in the
          browser console.
        </p>
        <LoggerUserProfile />
      </div>
    </div>
  );
};

export default HOCPattern;
