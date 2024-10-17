import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function AnimalForm() {
  const navigate = useNavigate();

  const [pet, setPet] = useState({
    petName: "",
    petAge: "",
    petBreed: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPet({
      ...pet,
      [name]: value, // Utilise le nom du champ pour mettre à jour la bonne propriété
    });

    setErrors({ ...errors, [name]: "" }); // Efface les erreurs liées au champ en cours de modification
  };

  const validateFormPet = () => {
    const newErrors = {};
    if (pet.petName === "") newErrors.petName = "Le prénom est requis.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Retourne true si pas d'erreurs
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Appeler la fonction de validation
    if (!validateFormPet()) {
      return; // Arrêter la soumission si le formulaire n'est pas valide
    }

    try {
      const response = await fetch(`${ApiUrl}/api/pets/petRegisters`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pet),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      const data = await response.json();
      console.info("Success:", data);
      navigate("/profil-page"); // Redirection après succès
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-20 mb-20">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Informations sur mon animal
      </h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mt-4">
          <label
            htmlFor="petName"
            className="block text-sm font-medium text-gray-700"
          >
            Prénom du chien
          </label>
          <input
            type="text"
            id="petName"
            name="petName"
            onChange={handleChange}
            value={pet.petName}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="petAge"
            className="block text-sm font-medium text-gray-700"
          >
            Âge de l'animal
          </label>
          <input
            type="number"
            id="petAge"
            name="petAge"
            onChange={handleChange}
            value={pet.petAge}
            required
            min="0"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="petBreed"
            className="block text-sm font-medium text-gray-700"
          >
            Race du chien
          </label>
          <input
            type="text"
            id="petBreed"
            name="petBreed"
            onChange={handleChange}
            value={pet.petBreed}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="3"
            onChange={handleChange}
            value={pet.description}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-third text-white font-bold py-2 rounded-md"
          >
            Enregistrer les informations
          </button>
        </div>
      </form>
    </div>
  );
}
