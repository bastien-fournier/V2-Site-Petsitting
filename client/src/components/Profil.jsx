import { Link } from "react-router-dom";
import { useUserContext } from "./Context/UserContext";

import Dog from "../assets/images/dog.png";
import PetProfil from "./PetProfil";

export default function Profil() {
  const { user } = useUserContext();

  return (
    <div className="flex justify-center items-center flex-col max-w-md mx-auto p-6 bg-secondary rounded-lg shadow-md mt-20 mb-20">
      <div className="mb-6 flex justify-center flex-col items-center">
        <img
          src={Dog}
          alt="Profil"
          className="w-80 h-52 md:w-80 md:h-52 lg:w-80 lg:h-52  mx-auto mb-4 object-cover"
        />
        <h2 className="text-2xl font-bold text-white">
          Bienvenue, {user.firstname} !
        </h2>
        <p className="text-white">Heureux de vous revoir !</p>
      </div>

      <div className="mb-6">
        <Link
          to="/animal-page"
          className="bg-forth text-secondary px-4 py-2 rounded hover:bg-forth-dark transition duration-300"
        >
          Ajouter un nouvel animal
        </Link>
      </div>
      <div>
        <PetProfil />
      </div>
    </div>
  );
}
