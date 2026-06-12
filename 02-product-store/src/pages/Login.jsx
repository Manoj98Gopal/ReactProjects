import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useAuth";
import { useAuthStore } from "../store/useAuthStore";

const Login = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const login = useLogin();

  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  // If already logged in → redirect to home
  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated]);

  const validate = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = "Username is required";
    if (!form.password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    login.mutate(form, {
      onSuccess: () => navigate("/", { replace: true }),
      onError: () => setErrors({ password: "Invalid username or password" })
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">🛒 Product Store</h1>
          <p className="text-gray-500 text-sm mt-2">Login to continue</p>
        </div>

        {/* Test Credentials */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 mb-6">
          <p className="text-xs text-blue-600 font-semibold mb-1">
            Test Credentials
          </p>
          <p className="text-xs text-blue-500">
            username: <strong>mor_2314</strong>
          </p>
          <p className="text-xs text-blue-500">
            password: <strong>83r5^_</strong>
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Username
            </label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-900 transition"
            />
            {errors.username && (
              <p className="text-red-400 text-xs mt-1">{errors.username}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-900 transition"
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">{errors.password}</p>
            )}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={login.isPending}
          className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition disabled:opacity-50"
        >
          {login.isPending ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Login;
