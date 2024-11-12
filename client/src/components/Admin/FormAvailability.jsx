import { useState, useEffect } from "react";
import { format } from "date-fns";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function FormAvailability() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("disponible");
  const [availabilities, setAvailabilities] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");

  useEffect(() => {
    const fetchAvailabilities = async () => {
      try {
        const response = await fetch(
          `${ApiUrl}/api/availability/readAvailability`
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setAvailabilities(data);
        } else {
          console.error("La donnée reçue n'est pas un tableau.");
        }
      } catch (error) {
        console.error("Erreur de récupération des disponibilités :", error);
      }
    };
    fetchAvailabilities();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const availabilityData = { startDate, endDate, status };

    try {
      const response = await fetch(
        editingId
          ? `${ApiUrl}/api/availability/availabilityAdmin/${editingId}`
          : `${ApiUrl}/api/availability/availabilityAdmin`,
        {
          method: editingId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(availabilityData),
          credentials: "include",
        }
      );

      if (response.ok) {
        setFeedbackMessage(
          editingId
            ? "Disponibilité modifiée avec succès !"
            : "Disponibilité ajoutée avec succès !"
        );
        const updatedAvailabilities = await response.json();
        setAvailabilities(updatedAvailabilities);
        setStartDate("");
        setEndDate("");
        setStatus("disponible");
        setEditingId(null);
      } else {
        setFeedbackMessage(
          "Erreur lors de la mise à jour de la disponibilité."
        );
      }
    } catch (error) {
      console.error("Erreur:", error);
      setFeedbackMessage("Erreur lors de la mise à jour de la disponibilité.");
    }
  };

  const handleEdit = (availability) => {
    setStartDate(availability.start_date);
    setEndDate(availability.end_date);
    setStatus(availability.status);
    setEditingId(availability.id);
  };

  const handleDelete = async (id) => {
    if (
      window.confirm("Êtes-vous sûr de vouloir supprimer cette disponibilité ?")
    ) {
      try {
        const response = await fetch(
          `${ApiUrl}/api/availability/availabilityAdmin/${id}`,
          {
            method: "DELETE",
            credentials: "include",
          }
        );

        if (response.ok) {
          setFeedbackMessage("Disponibilité supprimée avec succès !");
          setAvailabilities(
            availabilities.filter((availability) => availability.id !== id)
          );
        } else {
          setFeedbackMessage(
            "Erreur lors de la suppression de la disponibilité."
          );
        }
      } catch (error) {
        console.error("Erreur:", error);
        setFeedbackMessage(
          "Erreur lors de la suppression de la disponibilité."
        );
      }
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="startDate"
            className="block text-sm font-semibold text-gray-700"
          >
            Date de début :
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="endDate"
            className="block text-sm font-semibold text-gray-700"
          >
            Date de fin :
          </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-semibold text-gray-700"
          >
            Statut :
          </label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="mt-2 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="disponible">Disponible</option>
            <option value="indisponible">Indisponible</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-2 mt-4 bg-secondary text-white font-semibold rounded-md hover:bg-blue-600"
        >
          {editingId ? "Modifier la disponibilité" : "Ajouter la disponibilité"}
        </button>
      </form>

      {feedbackMessage && (
        <div className="mt-4 text-center text-green-500">
          <p>{feedbackMessage}</p>
        </div>
      )}

      <h3 className="mt-6 text-xl font-semibold">
        Disponibilités existantes :
      </h3>
      <ul className="mt-4 space-y-4">
        {Array.isArray(availabilities) && availabilities.length > 0 ? (
          availabilities.map((availability) => (
            <li
              key={availability.id}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md"
            >
              <span className="text-sm text-gray-700">
                {format(new Date(availability.start_date), "dd/MM/yyyy")} -{" "}
                {format(new Date(availability.end_date), "dd/MM/yyyy")}(
                {availability.status === "disponible"
                  ? "Disponible"
                  : "Indisponible"}
                )
              </span>
              <div className="flex space-x-2">
                <button
                  type="button"
                  onClick={() => handleEdit(availability)}
                  className="text-blue-500 hover:underline"
                >
                  Modifier
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(availability.id)}
                  className="text-red-500 hover:underline"
                >
                  Supprimer
                </button>
              </div>
            </li>
          ))
        ) : (
          <li>Aucune disponibilité disponible.</li>
        )}
      </ul>
    </div>
  );
}
