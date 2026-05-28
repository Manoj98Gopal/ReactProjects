import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import withErrorBoundary from "./projects/componentPattrens/hoc/ErrorBoundryHoc/withErrorBoundary.jsx";
import ErrorFallback from "./projects/componentPattrens/hoc/ErrorBoundryHoc/ErrorFallback.jsx";

const SafeComponent = withErrorBoundary(App, ErrorFallback);

createRoot(document.getElementById("root")).render(<SafeComponent />);

//  <StrictMode>
//     <App />
//   </StrictMode>,
