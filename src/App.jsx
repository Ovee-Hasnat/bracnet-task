import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";
import PrivateOutlet from "../utils/PrivateOutlet";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            localStorage.authUser ? (
              <Navigate to={"/dashboard"} replace={true} />
            ) : (
              <Login />
            )
          }
        />

        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
