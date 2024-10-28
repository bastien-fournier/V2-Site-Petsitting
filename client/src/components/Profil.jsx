import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "./Context/UserContext";

import Dog from "../assets/images/dog.png";
import PetProfil from "./PetProfil";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function Profil() {
  const { user } = useUserContext();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchUserPets() {
      try {
        const response = await fetch(`${ApiUrl}/api/pets/profile/pets`, {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Erreur :", error);
      }
    }
    fetchUserPets();
  }, []);

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

      {pets.length === 0 ? (
        <p>Tu n'as pas encore ajouté ton animal</p>
      ) : (
        pets.map((pet) => (
          <div key={pet.id}>
            <PetProfil
              petName={pet.petName}
              petAge={pet.petAge}
              petBreed={pet.petBreed}
              description={pet.description}
            />
          </div>
        ))
      )}
    </div>
  );
}
