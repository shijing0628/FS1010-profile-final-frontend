import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Dashboard from "./pages/Dashboard";
import ProjectOne from "./components/ProjectOne/ProjectOne";
import Skills from "./pages/Skills";

function App() {
  return (
    <Router className="app">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route path="/about/projectOne" exact component={ProjectOne}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/auth" component={Login}></Route>
        <Route path="/users" component={SignUp}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
      </Switch>
    </Router>
  );
}

export default App;
