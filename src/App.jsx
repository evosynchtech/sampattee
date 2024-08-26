import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ShowProperty from "./pages/ShowProperty";
import About from "./pages/About";
import ShowPlaceWise from "./pages/ShowPlaceWise";
import placeWise from "./data/placeWise";
import ErrorPage from "./pages/Error";
import Layout from "./components/screen/Layout";
import ShowPropertyWrapper from "./components/showPropertyWrapper/ShowPropertyWrapper";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/property/:id" element={<ShowProperty />} />
            <Route path="/place">
              <Route path="zirakpur">
                <Route
                  path=""
                  element={
                    <ShowPlaceWise
                      placeWiseProperty={placeWise.zirakpur}
                      placeName="zirakpur"
                    />
                  }
                />
                <Route
                  path=":id"
                  element={<ShowPropertyWrapper place="zirakpur" />}
                />
              </Route>
              <Route path="banur">
                <Route
                  path=""
                  element={
                    <ShowPlaceWise
                      placeWiseProperty={placeWise.banur}
                      placeName="banur"
                    />
                  }
                />
                <Route
                  path=":id"
                  element={<ShowPropertyWrapper place="banur" />}
                />
              </Route>
              <Route path="new_chandigarh">
                <Route
                  path=""
                  element={
                    <ShowPlaceWise
                      placeWiseProperty={placeWise.new_chandigarh}
                      placeName="new_chandigarh"
                    />
                  }
                />
                <Route
                  path=":id"
                  element={<ShowPropertyWrapper place="new_chandigarh" />}
                />
              </Route>
              <Route path="dera_bassi">
                <Route
                  path=""
                  element={
                    <ShowPlaceWise
                      placeWiseProperty={placeWise.dera_bassi}
                      placeName="dera_bassi"
                    />
                  }
                />
                <Route
                  path=":id"
                  element={<ShowPropertyWrapper place="dera_bassi" />}
                />
              </Route>
              <Route path="kharar">
                <Route
                  path=""
                  element={
                    <ShowPlaceWise
                      placeWiseProperty={placeWise.kharar}
                      placeName="kharar"
                    />
                  }
                />
                <Route
                  path=":id"
                  element={<ShowPropertyWrapper place="kharar" />}
                />
              </Route>
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
