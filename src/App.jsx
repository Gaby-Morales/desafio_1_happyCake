import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navbar";
import HomePage from "./views/HomePage";
import ContactPage from "./views/ContactPage";
import NotFound from "./views/NotFound";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
export default App;
