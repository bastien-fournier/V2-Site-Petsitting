import PropTypes from "prop-types";

import ProfilDog from "../assets/images/profilDog.png";

export default function PetProfil({ petName, petAge, petBreed, description }) {
  return (
    <div className="max-w-sm mx-auto p-6 mt-10 bg-white rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <img
          src={ProfilDog}
          alt="Profil de l'animal"
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <h2 className="text-xl text-secondary font-semibold  text-center mb-4">
        {petName}
      </h2>
      <ul className="space-y-2">
        <li className="text-sm text-secondary">
          <span className="font-medium text-secondary">J'ai </span>
          {petAge} ans
        </li>
        <li className="text-sm text-secondary">
          <span className="font-medium text-secondary">Je suis un(e) </span>
          {petBreed}
        </li>
        <li className="text-sm text-secondary">
          <span className="font-medium text-secondary">
            Comment mon mon propriétaire me décrit : <span> </span>
          </span>
          {description}
        </li>
      </ul>
    </div>
  );
}

PetProfil.propTypes = {
  petName: PropTypes.string.isRequired,
  petAge: PropTypes.string.isRequired, // Modifie en fonction du type attendu
  petBreed: PropTypes.string.isRequired, // Modifie en fonction du type attendu
  description: PropTypes.string.isRequired, // Modifie en fonction du type attendu
};
