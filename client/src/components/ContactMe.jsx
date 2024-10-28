import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const [isSent, setIsSent] = useState(false);

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
    <div className="max-w-md mx-auto p-6 bg-secondary rounded-lg shadow-md mt-10 mb-20">
      {isSent ? (
        <p className="text-green-600 font-semibold text-center">
          Merci pour votre demande ! Nous reviendrons vers vous bientôt.
        </p>
      ) : (
        <form onSubmit={sendReservationRequest}>
          <h2 className="text-2xl font-bold text-center text-white">
            Demande de Réservation
          </h2>

          <div className="mt-4">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-white"
            >
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
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-white"
            >
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
            <label
              htmlFor="reservation_date"
              className="block text-sm font-medium text-white"
            >
              Date souhaitée
            </label>
            <input
              type="text"
              id="reservation_date"
              name="reservation_date"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
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
              className="w-full bg-forth text-secondary font-bold py-2 rounded-md"
            >
              Envoyer la Demande
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
