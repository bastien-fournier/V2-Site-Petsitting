import { useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./Context/UserContext";

export default function HomePage() {
  const { user } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return user === null || user === "null" ? (
    <nav className="bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-playfair font-bold text-2xl ">
              <Link to="/">NaosGuard</Link>
            </p>
          </div>

          <div className="hidden md:flex space-x-8">
            <ul className="flex space-x-5 text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">
                <Link to="/sign-up-page">S'inscrire</Link>
              </li>

              <li className="hover:text-gray-800 cursor-pointer">
                <Link to="/log-in-page">Se connecter</Link>
              </li>
            </ul>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 py-4 text-gray-600">
              <li className="hover:text-gray-800 cursor-pointer">
                <Link to="/sign-up-page">S'inscire</Link>
              </li>
              <li className="hover:text-gray-800 cursor-pointer">
                <Link to="/log-in-page">Se connecter</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  ) : (
    <nav className="bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div>
            <p className="font-playfair font-bold text-2xl ">
              <Link to="/">NaosGuard</Link>
            </p>
          </div>

          <div className="hidden md:flex space-x-8">
            <p className="flex space-x-5 text-gray-600 hover:text-gray-800 cursor-pointer">
              <Link to="/profil-page">{user.firstname}</Link>
            </p>
          </div>

          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} // Ajout d'un aria-label pour l'accessibilité
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <p className="flex flex-col space-y-4 py-4 text-gray-600 hover:text-gray-800 cursor-pointer">
              <Link to="/profil-page">{user.firstname}</Link>
            </p>
          </div>
        )}
      </div>
    </nav>
  );
}
