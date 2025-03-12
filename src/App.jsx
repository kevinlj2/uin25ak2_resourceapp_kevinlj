import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./assets/components/Layout";
import Resources from "./assets/components/Resources";
import PageTitle from "./assets/components/PageTitle";

function App() {
  return (
    <>
      {/*Lagt inn sidene*/}
      <PageTitle />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Resources />
                <Navigate to="/HTML" />
              </>
            }
          />
          {/*path=":category" er en slug som kommer til å 
          oppdatere seg basert på hvilken kategori som er trykket på*/}
          <Route
            path=":category"
            element={
              <>
                <PageTitle />
                <Resources />
              </>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
