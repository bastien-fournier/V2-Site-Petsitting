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
    <div className="w-full max-w-md mx-auto p-6 mt-10 mb-16">
      <h1 className="text-3xl font-bold text-center  mb-6">
        Informations sur mon animal
      </h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="petName" className="block  font-medium ">
            Prénom de l'animal
          </label>
          <input
            type="text"
            id="petName"
            name="petName"
            onChange={handleChange}
            value={pet.petName}
            required
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="petAge" className="block  font-medium ">
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
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="petBreed" className="block  font-medium ">
            Espèce
          </label>
          <input
            type="text"
            id="petBreed"
            name="petBreed"
            onChange={handleChange}
            value={pet.petBreed}
            required
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block  font-medium ">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            onChange={handleChange}
            value={pet.description}
            required
            className="mt-2 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-secondary text-white font-bold py-3 rounded-lg hover:bg-forth-dark focus:outline-none focus:ring-2 focus:ring-forth-dark transition duration-300"
          >
            Enregistrer les informations
          </button>
        </div>
      </form>
    </div>
  );
}
