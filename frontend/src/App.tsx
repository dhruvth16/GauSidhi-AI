import { Outlet } from "react-router-dom";
import "./App.css";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
