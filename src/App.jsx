import "./App.css";
import Login1 from "./components/logins/login_1.jsx";
import Navbar1 from "./components/navbars/navbar_1.jsx";
import Dashboard1 from "./components/dashboards/dashboard_1.jsx";

function App() {
  return (
    <div>
      <div className="fondo">
        <Navbar1 />
        <div className="containerLogin">
          <Login1 />
        </div>
      </div>
      <Dashboard1 />
    </div>
  );
}

export default App;
