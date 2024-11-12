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
    confirmPassword: "",
    birthday: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateFormUser = () => {
    const newErrors = {};
    if (register.firstname === "")
      newErrors.firstname = "Le prénom est requis.";
    if (register.lastname === "") newErrors.lastname = "Le nom est requis.";
    if (register.email === "") newErrors.email = "L'e-mail est requis.";
    if (register.birthday === "")
      newErrors.birthday = "La date de naissance est requise."; // Validation de la date de naissance
    if (register.password === "")
      newErrors.password = "Le mot de passe est requis.";
    if (register.password !== register.confirmPassword)
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Retourne true si pas d'erreurs
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFormUser()) {
      return;
    }

    try {
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
      navigate("/log-in-page");
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

  return (
    <div className="max-w-md w-full m-14 mt-10 mb-20">
      <h1 className="text-3xl font-bold font-playfair text-center">
        Inscription
      </h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mt-4">
          <label htmlFor="lastname" className="block text-sm ">
            Nom
          </label>
          <input
            onChange={handleChange}
            value={register.lastname}
            type="text"
            id="lastname"
            name="lastname"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.lastname && (
            <p className="text-red-500 text-sm">{errors.lastname}</p>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="firstname" className="block text-sm font-medium">
            Prénom
          </label>
          <input
            onChange={handleChange}
            value={register.firstname}
            type="text"
            id="firstname"
            name="firstname"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.firstname && (
            <p className="text-red-500 text-sm">{errors.firstname}</p>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium">
            Adresse mail
          </label>
          <input
            onChange={handleChange}
            value={register.email}
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="birthday" className="block text-sm font-medium">
            Date de naissance
          </label>
          <input
            onChange={handleChange}
            value={register.birthday}
            type="date"
            id="birthday"
            name="birthday"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.birthday && (
            <p className="text-red-500 text-sm">{errors.birthday}</p>
          )}
        </div>

        <div className="mt-4">
          <label htmlFor="password" className="block text-sm font-medium">
            Mot de passe
          </label>
          <input
            onChange={handleChange}
            value={register.password}
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium"
          >
            Confirmez votre mot de passe
          </label>
          <input
            value={register.confirmPassword}
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-secondary text-white font-bold py-2 rounded-md"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
}
