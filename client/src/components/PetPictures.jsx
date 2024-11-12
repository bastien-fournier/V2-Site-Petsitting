import { useState } from "react";
import Peach from "../assets/images/Peach.png";
import Snow from "../assets/images/Snow.png";
import Dax from "../assets/images/Dax.png";
import Haila from "../assets/images/Haila.png";
import Peanut from "../assets/images/Peanut.png";
import Tago from "../assets/images/Tago.png";

export default function PetPictures() {
  const [showAll, setShowAll] = useState(false);

  const dogs = [
    { id: 1, firstname: "Peach", image: Peach },
    { id: 2, firstname: "Snow", image: Snow },
    { id: 3, firstname: "Peanut", image: Peanut },
    { id: 4, firstname: "Tago", image: Tago },
    { id: 5, firstname: "Dax", image: Dax },
    { id: 6, firstname: "Haila", image: Haila },
  ];

  const visibleDogs = showAll ? dogs : dogs.slice(0, 4);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-playfair font-bold text-center mb-10">
        Ils m'ont fait confiance
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {visibleDogs.map((dog) => (
          <div
            key={dog.id}
            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={dog.image}
              alt={dog.firstname}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-semibold text-center text-gray-800">
              {dog.firstname}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {!showAll && dogs.length > 4 && (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="bg-secondary text-white px-4 py-2 rounded mt-5 transition-transform duration-300 hover:scale-105"
          >
            Voir plus
          </button>
        )}

        {showAll && (
          <button
            type="button"
            onClick={() => setShowAll(false)}
            className="bg-secondary text-white px-4 py-2 rounded mt-5 transition-transform duration-300 hover:scale-105"
          >
            Voir moins
          </button>
        )}
      </div>
    </div>
  );
}
