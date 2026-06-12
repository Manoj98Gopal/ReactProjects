import { useNavigate } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { useUIStore } from "../store/useUIStore";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const navigate = useNavigate();
  const toggleCart = useCartStore((s) => s.toggleCart);
  const getTotalItems = useCartStore((s) => s.getTotalItems);
  const setSearch = useUIStore((s) => s.setSearch);
  const openCreate = useUIStore((s) => s.openCreate);
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const logout = useAuthStore((s) => s.logout);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-40">
      <h1
        onClick={() => navigate("/")}
        className="text-xl font-bold tracking-wide cursor-pointer"
      >
        🛒 Product Store
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-72 px-4 py-2 rounded-lg text-gray-900 text-sm outline-none"
      />

      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            <span className="text-sm text-gray-300">
              👤 {user?.name?.firstname} {user?.name?.lastname}
            </span>
            <button
              onClick={openCreate}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold transition"
            >
              + Add Product
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-lg font-semibold transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>
        )}

        <button
          onClick={toggleCart}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg font-semibold transition"
        >
          Cart ({getTotalItems()})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
