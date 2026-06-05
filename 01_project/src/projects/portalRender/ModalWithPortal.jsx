import { createPortal } from "react-dom";

const ModalWithPortal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        {children}
        <button
          type="button"
          onClick={onClose}
          className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>,
    portalRoot
  );
};

export default ModalWithPortal;
