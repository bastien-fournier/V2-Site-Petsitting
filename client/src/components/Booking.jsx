import Calendar from "react-calendar";

export default function Booking() {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 mt-10 w-2/3">
      <h2 className="text-2xl font-bold mb-4">Réservez votre date</h2>
      <div className=" border border-gray-300 rounded-lg overflow-hidden w-72">
        <Calendar />
      </div>
      <p className="mt-4 text-gray-700">Date sélectionnée : </p>
    </div>
  );
}
