import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Layout from "./assets/components/Layout";
import Resources from "./assets/components/Resources";
import PageTitle from "./assets/components/PageTitle";

function App() {
  return (
    <>
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
