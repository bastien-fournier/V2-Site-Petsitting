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
    <div className="flex justify-center items-center flex-col max-w-md mx-auto p-6   mt-16 mb-20">
      <div className="mb-8 flex justify-center flex-col items-center">
        <img src={Dog} alt="Profil" className="w-80 h-52 object-cover   mb-4" />
        <h2 className="text-3xl font-bold  text-center">
          Bienvenue, {user.firstname} !
        </h2>
        <p className=" text-center text-lg">Heureux de vous revoir !</p>
      </div>

      <div className="mb-8">
        <Link
          to="/animal-page"
          className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-forth-dark focus:outline-none focus:ring-2 focus:ring-forth-dark transition duration-300"
        >
          Ajouter un nouvel animal
        </Link>
      </div>

      {pets.length === 0 ? (
        <p className="text-center  text-lg">
          Tu n'as pas encore ajouté ton animal
        </p>
      ) : (
        pets.map((pet) => (
          <div key={pet.id} className="mb-6">
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
