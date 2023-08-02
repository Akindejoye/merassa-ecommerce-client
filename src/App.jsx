import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";

const App = () => {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
