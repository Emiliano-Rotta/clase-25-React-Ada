import {useState} from "react"
import './App.css';
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Context from "./context/Context"


function App() {
  const [user, setUser] = useState({})
  const [language, setLanguage] = useState("es")

  const context = {
    user: user,
    setUser: setUser,
    language: language,
    setLanguage: setLanguage
  }

  
  return (
    <Context.Provider value={context}>
        <NavBar />
        <Home />
        <Footer />
    </Context.Provider>
  );
}

export default App;
