import { redirect } from "react-router-dom";

const ApiUrl = import.meta.env.VITE_API_URL;

const AdminLoader = async () => {
  try {
    const response = await fetch(`${ApiUrl}/api/users/admin`, {
      method: "GET",
      credentials: "include",
    });

    if (response.status === 401 || response.status === 403) {
      return redirect("/acces_refuse");
    }
    return response;
  } catch (err) {
    return console.error("Fetch profile error:", err);
  }
};

export default AdminLoader;
