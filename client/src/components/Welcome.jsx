export default function Welcome() {
  return (
    <div className="mb-5 p-5 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <h1 className="font-playfair font-bold text-5xl mt-5 text-gray-800">
        Dog and Cats lover 🐶 😺
      </h1>
      <h2 className="text-2xl mt-5 text-gray-600">Bastien PetSitter</h2>
      <p className="mt-3 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        reiciendis temporibus, ipsam nostrum nesciunt voluptates eos dicta
        necessitatibus dolorem a optio sunt corrupti cumque rem corporis,
        itaque, quos atque accusamus.
      </p>
      <button
        type="button"
        className="bg-third text-white px-4 py-2 rounded mt-5 transition-transform duration-300 hover:scale-105"
      >
        Me faire une demande
      </button>
    </div>
  );
}
