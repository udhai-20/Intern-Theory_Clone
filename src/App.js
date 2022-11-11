import "./App.css";
import AllRouter from "./Routes/AllRouter";
import Navbar from "./Component/Home/NavBar";
import Footer from "./Component/Home/Footer";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRouter />
      <Footer />
    </div>
  );
}

export default App;
