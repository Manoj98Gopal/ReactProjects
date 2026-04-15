import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="mx-auto max-w-[80%] px-6 py-10">
        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold">Home Page</h1>} />
          <Route path="/about" element={<h1 className="text-3xl font-bold">About Page</h1>} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/projects" element={<h1 className="text-3xl font-bold">Projects Page</h1>} />
          <Route path="/login" element={<h1 className="text-3xl font-bold">Login Page</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
