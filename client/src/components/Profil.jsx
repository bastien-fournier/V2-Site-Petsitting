import { Link } from "react-router-dom";
import { useUserContext } from "./Context/UserContext";

// import Avatar from "../assets/images/profil.png";
import Dog from "../assets/images/dog.png";

export default function Profil() {
  const { user } = useUserContext();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center mt-20">
      <div className="mb-6">
        <img
          src={Dog}
          alt="Profil"
          className="w-80 h-52 md:w-48 md:h-48 lg:w-56 lg:h-56  mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-gray-800">
          Bienvenue, {user.firstname} !
        </h2>
        <p className="text-gray-600">Heureux de vous revoir !</p>
      </div>

      <div className="mb-6">
        <Link
          to="/animal-page"
          className="bg-forth text-white px-4 py-2 rounded hover:bg-forth-dark transition duration-300"
        >
          Ajouter les informations de mon animal
        </Link>
      </div>
    </div>
  );
}
