import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ShowProperty from "./pages/ShowProperty";
import About from "./pages/About";
import ShowPlaceWise from "./pages/ShowPlaceWise";
import placeWise from "./data/placeWise";
import ErrorPage from "./pages/Error";
import Layout from "./components/screen/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<ShowProperty />} />
            <Route path="/place">
              <Route
                path="kharar"
                element={
                  <ShowPlaceWise
                    placeWiseProperty={placeWise.kharar}
                    placeName="kharar"
                  />
                }
              />
              <Route
                path="zirakpur"
                element={
                  <ShowPlaceWise
                    placeWiseProperty={placeWise.zirakpur}
                    placeName="zirakpur"
                  />
                }
              />
              <Route
                path="new_chandigarh"
                element={
                  <ShowPlaceWise
                    placeWiseProperty={placeWise.new_chandigarh}
                    placeName="new_chandigarh"
                  />
                }
              />
              <Route
                path="dera_bassi"
                element={
                  <ShowPlaceWise
                    placeWiseProperty={placeWise.dera_bassi}
                    placeName="dera_bassi"
                  />
                }
              />
              <Route
                path="banur"
                element={
                  <ShowPlaceWise
                    placeWiseProperty={placeWise.banur}
                    placeName="banur"
                  />
                }
              />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
