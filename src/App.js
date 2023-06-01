import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";
/**
 * The main component of the grocery shopping app.
 * @returns {JSX.Element} The rendered App component.
 */

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* Renders the Cards component when the path is '/' */}
        <Route path="/" element={<Cards />} />
        {/* Renders the CardsDetails component when the path matches '/cart/:id' */}

        <Route path="/cart/:id" element={<CardsDetails />} />
      </Routes>
    </>
  );
}

export default App;
