import { Outlet } from "react-router-dom";
import "./assets/css/styles.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet keys />
      </div>
      <Footer />
    </div>
  );
}

export default App;
