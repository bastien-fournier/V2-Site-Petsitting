import { Link } from "react-router-dom";
import DogWalking from "../assets/images/dogWalk.jpg";

export default function DogWalk() {
  return (
    <div className="flex flex-col md:flex-row items-stretch bg-secondary shadow-lg rounded-lg overflow-hidden">
      <img
        src={DogWalking}
        alt="Cat sitting on Sofa"
        className="w-full md:w-1/2 h-auto md:h-full object-cover"
      />
      <div className="p-6 md:w-1/2">
        <h2 className="text-2xl font-bold text-white mb-2">
          Promenade de chiens à domicile
        </h2>
        <h4 className="text-lg text-white mb-4">
          Des sorties régulières pour le bien-être de votre chien
        </h4>
        <p className="text-white">
          Pendant votre absence, nous nous occupons de promener votre chien et
          de lui offrir des moments de détente et de jeu en extérieur. Nous
          venons directement à votre domicile, emmenons votre chien pour une
          promenade adaptée à ses besoins, puis le ramenons chez vous. Ce
          service garantit à votre compagnon l'exercice et la stimulation dont
          il a besoin, tout en restant dans un environnement familier et en
          toute sécurité. Que ce soit pour une promenade rapide ou une longue
          sortie, votre chien sera entre de bonnes mains.
        </p>
        <Link to="/booking-page">
          <button
            type="button"
            className="mt-3 bg-forth text-secondary px-4 py-2 rounded"
          >
            Réserver
          </button>
        </Link>
      </div>
    </div>
  );
}
