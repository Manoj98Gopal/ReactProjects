import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectChildren from "./pages/projectChildren";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="mx-auto max-w-[80%] px-6 py-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />

          <Route path="/contacts" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectChildren />} />
          <Route
            path="/login"
            element={<h1 className="text-3xl font-bold">Login Page</h1>}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
