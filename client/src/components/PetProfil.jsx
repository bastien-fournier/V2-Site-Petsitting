import ProfilDog from "../assets/images/profilDog.png";

export default function PetProfil() {
  return (
    <div className="max-w-sm mx-auto  p-6 mt-10">
      <div className="flex items-center justify-center mb-4">
        <img
          src={ProfilDog}
          alt=""
          className="w-24 h-24 rounded-full object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold text-white text-center mb-4">Nom</h2>

      <ul className="space-y-2">
        <li className="text-sm text-white">
          <span className="font-medium text-white">Âge :</span> Age ans
        </li>
        <li className="text-sm text-white">
          <span className="font-medium text-white">Race :</span>
          Espèces
        </li>
        <li className="text-sm text-white">
          <span className="font-medium text-white">Description :</span>
          Description
        </li>
      </ul>
    </div>
  );
}
