import Booking from "../components/Booking";
import ContactMe from "../components/ContactMe";

export default function BookingPage() {
  return (
    <>
      <div className="flex justify-center">
        <Booking />
      </div>
      <div>
        <ContactMe />
      </div>
    </>
  );
}
