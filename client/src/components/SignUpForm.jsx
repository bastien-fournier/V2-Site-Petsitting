import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function SignUpForm() {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.info(register);
      const response = await fetch(`${ApiUrl}/api/users/registers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(register),
      });
      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      const data = await response.json();
      console.info("Success:", data);
      navigate("/");
      return data;
    } catch (err) {
      console.error("Fetch error:", err);
      return null;
    }
  };

  return (
    <div className="max-w-md mx-auto  p-6 bg-white rounded-md shadow-md mt-20 mb-20">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Inscription
      </h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mt-4">
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-gray-700"
          >
            Nom
          </label>
          <input
            onChange={handleChange}
            value={register.lastname}
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Votre nom"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="prenom"
            className="block text-sm font-medium text-gray-700"
          >
            Prénom
          </label>
          <input
            onChange={handleChange}
            value={register.firstname}
            type="text"
            id="firstname"
            name="firstname"
            placeholder="Votre prénom"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Adresse mail
          </label>
          <input
            onChange={handleChange}
            value={register.email}
            type="email"
            id="email"
            name="email"
            placeholder="Votre adresse mail"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Mot de passe
          </label>
          <input
            onChange={handleChange}
            value={register.password}
            type="password"
            id="password"
            name="password"
            placeholder="Votre mot de passe"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirmez votre mot de passe
          </label>
          {/* <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmez votre mot de passe"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          /> */}
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            À propos de votre animal
          </h2>
        </div>

        {/* <div className="mt-4">
          <label
            htmlFor="nomAnimal"
            className="block text-sm font-medium text-gray-700"
          >
            Nom de votre animal
          </label>
          <input
            type="text"
            id="nomAnimal"
            placeholder="Nom de votre animal"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="dateNaissance"
            className="block text-sm font-medium text-gray-700"
          >
            Date de naissance
          </label>
          <input
            type="date"
            id="dateNaissance"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="race"
            className="block text-sm font-medium text-gray-700"
          >
            Race
          </label>
          <input
            type="text"
            id="race"
            placeholder="Race de votre animal"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="detailsAnimal"
            className="block text-sm font-medium text-gray-700"
          >
            Dites-moi en plus sur votre animal
          </label>
          <textarea
            id="detailsAnimal"
            placeholder="Dites-moi en plus sur votre animal"
            rows="4"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          ></textarea>
        </div> */}

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-third text-white font-bold py-2 rounded-md"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}
