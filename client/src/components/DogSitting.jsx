import { Link } from "react-router-dom";
import DogSofa from "../assets/images/dogSofa.jpg";

export default function DogSitting() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-third shadow-lg rounded-lg overflow-hidden">
      <img
        src={DogSofa}
        alt="Dog on Sofa"
        className="w-full md:w-1/2 h-auto md:h-full object-cover"
      />
      <div className="p-6 md:w-1/2">
        <h2 className="text-2xl text-white font-bold mb-2">
          Service d'hébergement pour chiens
        </h2>
        <h4 className="text-lg text-white mb-4">
          À domicile, en toute tranquillité
        </h4>
        <p className="text-white">
          Offrez à votre chien un séjour confortable à domicile pendant votre
          absence. Nous garantissons un environnement sécurisé et attentionné,
          idéal pour les chiens de toutes tailles.
        </p>
        <p className="text-white">
          Chaque journée d'hébergement est à 22€. Ce tarif comprend
          l’hébergement, les repas, les promenades et les moments de jeu, afin
          que votre animal se sente comme chez lui pendant votre absence.
        </p>
        <Link to="/booking-page">
          <button
            type="button"
            className="mt-3 bg-secondary text-white px-4 py-2 rounded"
          >
            Réserver
          </button>
        </Link>
      </div>
    </div>
  );
}
