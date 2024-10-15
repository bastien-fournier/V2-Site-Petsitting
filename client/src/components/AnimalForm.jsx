export default function AnimalForme() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-20 mb-20">
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Informations sur mon animal
      </h1>
      <form method="POST">
        <div className="mt-4">
          <label
            htmlFor="dogName"
            className="block text-sm font-medium text-gray-700"
          >
            Prénom du chien
          </label>
          <input
            type="text"
            id="dogName"
            name="dogName"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="dogAge"
            className="block text-sm font-medium text-gray-700"
          >
            Âge du chien (en années)
          </label>
          <input
            type="number"
            id="dogAge"
            name="dogAge"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="dogBreed"
            className="block text-sm font-medium text-gray-700"
          >
            Race du chien
          </label>
          <input
            type="text"
            id="dogBreed"
            name="dogBreed"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="dogDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="dogDescription"
            name="dogDescription"
            rows="3"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-third text-white font-bold py-2 rounded-md"
          >
            Enregistrer les informations
          </button>
        </div>
      </form>
    </div>
  );
}
