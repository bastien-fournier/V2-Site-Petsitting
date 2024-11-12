import Naos from "../assets/images/Naos.png";
import Junkie from "../assets/images/Junkie.png";

export default function NaosAndJunkie() {
  return (
    <div className="max-w-3xl mx-auto p-10">
      <h2 className="text-3xl font-playfair font-bold text-center mb-16">
        Mes compagnons
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img
            src={Naos}
            alt="Naos"
            className="w-full h-60 object-cover rounded-lg mb-4 "
          />
          <h3 className="text-2xl font-bold text-center mb-4">Naos</h3>
          <p className="text-center text-gray-600 italic">
            "Salut ! Moi, c'est Naos, un bouledogue français de 7 ans. J'adore
            les câlins, et je suis toujours partant pour jouer ! Mon truc, c'est
            de faire sourire tout le monde autour de moi avec mon énergie et ma
            bouille rigolote. Alors si tu viens chez nous, prépare-toi à
            recevoir une tonne de tendresse !"
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
          <img
            src={Junkie}
            alt="Junkie"
            className="w-full h-60 object-cover rounded-lg mb-4 "
          />
          <h3 className="text-2xl font-bold text-center  mb-4">Junkie</h3>
          <p className="text-center text-gray-600 italic">
            "Salut ! Moi, c'est Junkie, un chat très gourmand et joueur !
            J'adore me blottir sur les plaids bien moelleux pour faire de
            longues siestes. Ici, je suis habitué à avoir tout un tas de toutous
            autour de moi, et je suis toujours gentil avec eux ! Alors, si tu me
            rends visite, prépare-toi à m’offrir quelques friandises et des
            câlins sur mon plaid préféré !"
          </p>
        </div>
      </div>
    </div>
  );
}
