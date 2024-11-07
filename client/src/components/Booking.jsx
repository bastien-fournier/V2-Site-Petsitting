import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function Booking() {
  const [availability, setAvailability] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const response = await fetch(
          `${ApiUrl}/api/availability/readAvailability`,
          {
            credentials: "include",
          }
        );
        if (response.ok) {
          const data = await response.json();

          setAvailability(data);
        } else {
          console.error("Erreur de récupération des disponibilités");
        }
      } catch (error) {
        console.error("Erreur lors de la connexion à l'API:", error);
      }
    };

    fetchAvailability();
  }, []);

  const isUnavailable = (date) =>
    availability.some(
      (avail) =>
        avail.status === "indisponible" &&
        new Date(avail.startDate) <= date &&
        new Date(avail.endDate) >= date
    );

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md mt-20 mb-10">
      <h2 className="text-2xl font-bold text-white mb-4">
        Réservez votre date
      </h2>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={({ date }) =>
          isUnavailable(date) ? "bg-red-200 text-red-700 font-semibold" : null
        }
      />
      <p className="mt-4 text-white">
        Date sélectionnée :{" "}
        {selectedDate
          ? selectedDate.toLocaleDateString()
          : "Aucune date sélectionnée"}
      </p>
    </div>
  );
}
