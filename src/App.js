import "./App.css";
import Nav from "./components/Navbar";
import Header from "./components/Header";
import Icon from "./components/Icon";
import Program from "./components/Program";
import News from "./components/News";
import About from "./components/About";

function App() {
  return (
    <div className="bg-gray-800">
      <Nav />
      <Header />
      <Icon />
      <Program />
      <News/>
      <About/>
    </div>
  );
}

export default App;
