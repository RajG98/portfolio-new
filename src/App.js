import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";


function App() {
  return (
    <div>
      <Navbar/>
      <Home />
      <Projects/>
    </div>
  );
}

export default App;
