import "./App.css";
import AllRouter from "./Routes/AllRouter";
import Navbar from "./Component/Home/NavBar";
import Footer from "./Component/Home/Footer";
import Admin_2 from "./Component/AdminDahBoard/Admin_2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRouter />

      <Footer />
    </div>
  );
}

export default App;
