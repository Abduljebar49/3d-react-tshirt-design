import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Design from "./pages/Design";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      {/* <Home />
      <Canvas />
      <Customizer /> */}
      <Design />
    </main>
  );
}

export default App;
