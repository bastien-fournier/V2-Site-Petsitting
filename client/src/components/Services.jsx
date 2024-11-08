import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className=" p-10">
      <h2 className="text-3xl font-playfair  font-bold text-center">
        Mes Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        <div className=" p-5   rounded-lg bg-white">
          {/* <img
            src="path/to/dog-sitting.jpg"
            alt="Garde de chiens"
            className="mb-3 rounded"
          /> */}
          <h3 className="text-xl font-semibold">Garde de chiens</h3>
          <p>Je m'occupe de vos chiens à domicile ou chez vous avec amour.</p>
          <Link to="/about-services">
            <button
              type="button"
              className="bg-secondary text-white px-4 py-2 rounded mt-5 transition-transform duration-300 hover:scale-105"
            >
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-lg p-5">
          {/* <img
            src="path/to/cat-sitting.jpg"
            alt="Garde de chats"
            className="mb-3 rounded"
          /> */}
          <h3 className="text-xl font-semibold">Garde de chats</h3>
          <p>
            Je veille sur vos chats et leur offre toute l'attention dont ils ont
            besoin.
          </p>
          <Link to="/about-services">
            <button
              type="button"
              className="bg-secondary text-white px-4 py-2 rounded mt-5 transition-transform duration-300 hover:scale-105"
            >
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="p-5 bg-white rounded-lg">
          {/* <img
            src="path/to/cat-sitting.jpg"
            alt="Garde de chats"
            className="mb-3 rounded"
          /> */}
          <h3 className="text-xl font-semibold">Promenade de chiens</h3>
          <p>
            Je viens récupérer votre chien chez vous pour une promenade joyeuse
            et active. Chaque promenade est une opportunité pour votre chien de
            se dépenser, de découvrir de nouveaux endroits et de socialiser avec
            d'autres animaux.
          </p>
          <Link to="/about-services">
            <button
              type="button"
              className="bg-secondary text-white px-4 py-2 rounded mt-5 transition-transform duration-300 hover:scale-105"
            >
              En savoir plus
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
