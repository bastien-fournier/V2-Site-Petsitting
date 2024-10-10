import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}

export default App;
