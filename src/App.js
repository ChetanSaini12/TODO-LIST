import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Componenets/NavBar";
import Content from "./Componenets/Content";
function App() {
  return (
    <div className="App flex flex-col v-screen items-center" style={{ 
      backgroundImage: `url("bg3.jpg")` 
    }}>
      <NavBar/>
      <Content/>

    </div>
  );
}

export default App;
 