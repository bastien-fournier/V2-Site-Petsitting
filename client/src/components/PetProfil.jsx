import { useEffect, useState } from "react";
import ProfilDog from "../assets/images/profilDog.png";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function PetProfil() {
  const [pet, setPet] = useState(null);

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
        const data = await response.json();
        setPet(data[0]); // Affiche le premier animal
      } catch (error) {
        console.error("Erreur :", error);
      }
    }
    fetchUserPets();
  }, []);

  return (
    <div className="max-w-sm mx-auto p-6 mt-10">
      <div className="flex items-center justify-center mb-4">
        <img
          src={ProfilDog}
          alt="Profil de l'animal"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold text-white text-center mb-4">
        {pet?.petName || "Nom de l'animal"}
      </h2>
      <ul className="space-y-2">
        <li className="text-sm text-white">
          <span className="font-medium text-white">Âge :</span>{" "}
          {pet?.petAge || "Non spécifié"} ans
        </li>
        <li className="text-sm text-white">
          <span className="font-medium text-white">Race :</span>{" "}
          {pet?.petBreed || "Non spécifié"}
        </li>
        <li className="text-sm text-white">
          <span className="font-medium text-white">Description :</span>{" "}
          {pet?.description || "Aucune description"}
        </li>
      </ul>
    </div>
  );
}
