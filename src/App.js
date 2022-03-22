import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login";
import ListScreen from "./Screens/ListScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ticket-ui" element={<Login />} />
        <Route path="/dashboard" element={<ListScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
