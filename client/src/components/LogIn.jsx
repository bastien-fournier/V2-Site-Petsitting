import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "./Context/UserContext";

export default function LogIn() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const { login } = useUserContext();

  const [loginInfos, setLoginInfos] = useState({
    email: "",
    password: "",
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Vérification du format de l'email
    if (!emailRegex.test(loginInfos.email)) {
      setErrors({ email: "Adresse email invalide" });
      return;
    }

    try {
      const response = await fetch(`${ApiUrl}/api/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfos),
        credentials: "include",
      });

      if (response.status === 200) {
        const user = await response.json();
        login(user.user);
        navigate("/profil-page");
        alert(`Bienvenue ${user.user.firstname}`);
      } else {
        const errorText = await response.text();
        setErrors({ general: errorText });
        alert("Une erreur s'est produite");
      }
    } catch (error) {
      console.error("Login failed:", error);
      alert("Une erreur s'est produite lors de la connexion");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10 mb-20">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Connexion
      </h1>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Adresse mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginInfos.email}
            onChange={(e) =>
              setLoginInfos({ ...loginInfos, email: e.target.value })
            }
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
          {errors.email && (
            <p
              className="text-red-500 text-sm"
              role="alert"
              aria-live="assertive"
            >
              {errors.email}
            </p>
          )}
        </div>

        <div className="mt-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={loginInfos.password}
            onChange={(e) =>
              setLoginInfos({ ...loginInfos, password: e.target.value })
            }
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-6">
          {errors.general && (
            <div role="alert" aria-live="assertive" className="text-red-500">
              {errors.general}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-third text-white font-bold py-2 rounded-md"
          >
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
}
