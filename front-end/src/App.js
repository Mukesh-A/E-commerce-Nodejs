import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./SignUp";
import PrivateComponent from "./components/PrivateComponents";
import Login from "./components/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path="/" element={<h1>Products Listing COMPONENS</h1>} />
            <Route path="/add" element={<h1> add Products</h1>} />
            <Route path="/update" element={<h1>update Products</h1>} />
            <Route path="/logout" element={<h1>logout </h1>} />
            <Route path="/profile" element={<h1>profile</h1>} />
          </Route>

          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
