import { useState } from "react";

const ApiUrl = import.meta.env.VITE_API_URL;

export default function FormAvailability() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("disponible");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const availabilityData = {
      startDate,
      endDate,
      status,
    };

    try {
      const response = await fetch(
        `${ApiUrl}/api/availability/availabilityAdmin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(availabilityData),
          credentials: "include",
        }
      );

      if (response.ok) {
        alert("Disponibilité ajoutée avec succès !");
        setStartDate("");
        setEndDate("");
        setStatus("disponible");
      } else {
        alert("Erreur lors de l’ajout de la disponibilité");
      }
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="startDate">Date de début :</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="endDate">Date de fin :</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="status">Statut :</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="disponible">Disponible</option>
          <option value="indisponible">Indisponible</option>
        </select>
      </div>

      <button type="submit">Ajouter la disponibilité</button>
    </form>
  );
}
