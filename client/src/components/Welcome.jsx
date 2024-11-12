import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <div>
      <h1 className="font-playfair font-bold text-5xl mt-5  ">
        Dogs and Cats lover
      </h1>
      <h2 className="text-2xl mt-5   ">Bastien Pet-Sitter</h2>
      <p className="mt-3  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        reiciendis temporibus, ipsam nostrum nesciunt voluptates eos dicta
        necessitatibus dolorem a optio sunt corrupti cumque rem corporis,
        itaque, quos atque accusamus.
      </p>
      <Link to="/booking-page">
        <button
          type="button"
          className="bg-secondary text-white px-4 py-2 rounded mt-5 transition-transform duration-300 hover:scale-105"
        >
          Faire une réservation
        </button>
      </Link>
    </div>
  );
}
