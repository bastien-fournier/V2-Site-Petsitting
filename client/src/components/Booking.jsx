import Calendar from "react-calendar";

export default function Booking() {
  return (
    <div className="max-w-md mx-auto p-6 bg-secondary rounded-lg shadow-md mt-20 mb-10">
      <h2 className="text-2xl font-bold text-white mb-4">
        Réservez votre date
      </h2>
      <div className="border border-gray-300 rounded-lg overflow-hidden w-full max-w-md">
        <Calendar />
      </div>
      <p className="mt-4 text-white">Date sélectionnée :</p>
    </div>
  );
}
