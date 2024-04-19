import { useContext } from "react";
import "./App.css";
import { ThemeContext } from "./Context/ThemeContext";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="App"
      style={{
        background: theme.background,
        color: theme.text,
      }}
    >
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
