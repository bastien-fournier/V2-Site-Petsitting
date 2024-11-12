import FormAvailability from "../components/Admin/FormAvailability";

export default function AdminPage() {
  return (
    <div>
      <div className="flex justify-center text-3xl font-playfair font-bold">
        <h1>Gestion des disponibilités</h1>
      </div>
      <FormAvailability />
    </div>
  );
}
