import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { UserProvider } from "./components/Context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
