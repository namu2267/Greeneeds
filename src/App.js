import { Outlet } from "react-router-dom";
import DesktopNav from "./components/DesktopNav/DesktopNav.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DesktopNav />
      <Outlet />
    </div>
  );
}

export default App;
