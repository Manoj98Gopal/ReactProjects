import { Link } from "react-router-dom";

function Header() {
  const links = [
    { label: "About", path: "/about" },
    { label: "Contacts", path: "/contacts" },
    { label: "Projects", path: "/projects" },
    { label: "Login", path: "/login" }
  ];

  return (
    <header className="border-b border-slate-200 bg-white fixed top-0 left-0 right-0 z-20">
      <nav className="mx-auto flex max-w-[80%] items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-slate-900">
          Logo
        </Link>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-slate-700 transition hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
