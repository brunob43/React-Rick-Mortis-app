
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./components.jsx/Home";
import Form from "./components.jsx/Form";
import NavBar from "./components.jsx/NavBar";

 /*en CP ---> crear una ruta con exact que vaya a X lugar y muestre X componente */
function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/form" component={Form} />
    </div>
  );
}

export default App;

// COMPONENTE HOME
// CARDS
// CARD
// FORM
// NAVBAR

// REDUX
// ACTIONS
// REDUCER
// STORE

// CONECTAR REACT CON REDUX => PROVIDER
// DARLE A LA APP LA CAPACIDAD DE DEFINIR RUTAS => BROWSER ROUTER
