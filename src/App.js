import "./assets/css/styles.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Pages/Homepage/Homepage";

function App() {
  return (
    <div>
      <div className="body">
        <Navbar />
        <Homepage/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
