import { Route, Routes } from "react-router-dom";
import Resources from "./assets/components/Resources";
import "./App.css";
import Layout from "./assets/components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="html" element={<Resources />} />
      </Routes>
    </Layout>
  );
}

export default App;
