import { useState } from "react";
import { useUIStore } from "../store/useUIStore";
import { useCreateProduct } from "../hooks/useProducts";
import { useCategories } from "../hooks/useProducts";

const initialForm = {
  title: "",
  price: "",
  description: "",
  category: "",
  image: ""
};

const AddProductModal = () => {
  const isCreateOpen = useUIStore((s) => s.isCreateOpen);
  const closeCreate = useUIStore((s) => s.closeCreate);

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const { data: categories } = useCategories();
  const createProduct = useCreateProduct();

  // Senior dev always validates before hitting API
  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.price || isNaN(form.price))
      newErrors.price = "Valid price is required";
    if (!form.description.trim())
      newErrors.description = "Description is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.image.trim()) newErrors.image = "Image URL is required";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // clear error on type
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    createProduct.mutate(
      { ...form, price: parseFloat(form.price) },
      {
        onSuccess: () => {
          setForm(initialForm); // reset form
          setErrors({});
          closeCreate(); // close modal
        }
      }
    );
  };

  if (!isCreateOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={closeCreate} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 z-10 p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Add New Product</h2>
          <button
            onClick={closeCreate}
            className="text-gray-400 hover:text-gray-800 text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Product title"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-900"
            />
            {errors.title && (
              <p className="text-red-400 text-xs mt-1">{errors.title}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Price
            </label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="29.99"
              type="number"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-900"
            />
            {errors.price && (
              <p className="text-red-400 text-xs mt-1">{errors.price}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Category
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-900 bg-white"
            >
              <option value="">Select category</option>
              {categories?.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-400 text-xs mt-1">{errors.category}</p>
            )}
          </div>

          {/* Image URL */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Image URL
            </label>
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-900"
            />
            {errors.image && (
              <p className="text-red-400 text-xs mt-1">{errors.image}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Product description..."
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm outline-none focus:border-gray-900 resize-none"
            />
            {errors.description && (
              <p className="text-red-400 text-xs mt-1">{errors.description}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={createProduct.isPending}
          className="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-700 transition disabled:opacity-50"
        >
          {createProduct.isPending ? "Creating..." : "Create Product"}
        </button>
      </div>
    </div>
  );
};

export default AddProductModal;
