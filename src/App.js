import "./App.css";
import Footer from "./components/common/footer/Footer";
import Header from "./components/common/header/Header";
import Pages from "./components/pages/Pages";
import { BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <div className="main">
        <Pages />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
