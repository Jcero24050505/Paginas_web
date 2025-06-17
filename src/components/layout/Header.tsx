
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/user/UserButton";
import { SearchDialog } from "@/components/search/SearchDialog";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "Comprar", href: "/comprar" },
    { name: "Vender", href: "/vender" },
    { name: "Profesionales", href: "/profesionales" },
    { name: "Noticias", href: "/noticias" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-heading text-2xl font-bold text-carmarketplace-950">
              AutoMarket
            </span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-gray-700 hover:text-carmarketplace-700 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchDialog />
            <Button variant="outline" asChild>
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild>
              <Link to="/publicar">Publicar Anuncio</Link>
            </Button>
            <UserButton />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <SearchDialog />
            <button
              type="button"
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-carmarketplace-700"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Abrir menú</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-carmarketplace-700 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 flex flex-col space-y-2 px-3">
            <Button variant="outline" asChild className="justify-center">
              <Link to="/login">Iniciar Sesión</Link>
            </Button>
            <Button asChild className="justify-center">
              <Link to="/publicar">Publicar Anuncio</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
