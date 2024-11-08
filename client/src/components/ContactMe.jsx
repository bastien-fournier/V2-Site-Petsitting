import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [isSent, setIsSent] = useState(false);

  const [reservation, setReservation] = useState({
    start_date: "",
    end_date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservation({
      ...reservation,
      [name]: value,
    });
  };

  const sendReservationRequest = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.info("Message envoyé:", result.text);
          setIsSent(true);
        },
        (error) => {
          console.info("Erreur:", error.text);
        }
      );
  };

  return (
    <div className="max-w-md m-14 mt-10 mb-20">
      {isSent ? (
        <p className="text-green-600 font-semibold text-center">
          Merci pour votre demande ! Je reviendrais très vite vers vous.
        </p>
      ) : (
        <form onSubmit={sendReservationRequest}>
          <h2 className="text-3xl font-bold font-playfair text-center ">
            Demande de Réservation
          </h2>

          <div className="mt-4">
            <label htmlFor="user_name" className="block text-sm font-medium ">
              Votre Nom
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="user_email" className="block text-sm font-medium ">
              Votre Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="start_date" className="block text-sm font-medium ">
              Date de début
            </label>
            <input
              type="date"
              id="start_date"
              name="start_date"
              required
              onChange={handleChange} // Assure-toi d'avoir une fonction handleChange pour gérer l'état
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="end_date" className="block text-sm font-medium ">
              Date de fin
            </label>
            <input
              type="date"
              id="end_date"
              name="end_date"
              required
              onChange={handleChange} // Idem pour la fonction handleChange
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="block text-sm font-medium ">
              Détails de la demande
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-secondary text-white  font-bold py-2 rounded-md"
            >
              Envoyer la Demande
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
