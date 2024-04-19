import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import PrivateOutlet from "../utils/PrivateOutlet";

function App() {
  const auth = localStorage.authUser;
  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={auth ? <Navigate to={"/dashboard"} /> : <Login />}
        />

        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
