import { Link } from "react-router-dom";
import Cat from "../assets/images/cat.jpg";

export default function CatSitting() {
  return (
    <div className="flex flex-col md:flex-row items-stretch bg-secondary shadow-lg rounded-lg overflow-hidden">
      <img
        src={Cat}
        alt="Cat sitting on Sofa"
        className="w-full md:w-1/2 h-auto md:h-full object-cover"
      />
      <div className="p-6 md:w-1/2">
        <h2 className="text-2xl font-bold text-white mb-2">
          Catsitting à domicile
        </h2>
        <h4 className="text-lg text-white mb-4">
          Un séjour confortable pour votre chat, en toute sérénité
        </h4>
        <p className="text-white">
          Pendant votre absence, offrez à votre chat un environnement calme et
          sécurisé, où il pourra rester dans le confort de son propre domicile.
          Nous assurons des visites régulières pour répondre à ses besoins :
          alimentation, nettoyage de la litière, et bien sûr des moments de
          câlins et de jeux. Votre chat bénéficiera d'une attention
          personnalisée et de tous les soins dont il a besoin, sans les
          perturbations liées à un changement d'environnement.
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
