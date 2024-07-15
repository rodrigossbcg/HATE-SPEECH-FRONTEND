import Navbar from "../components/navbar";
import Models from "../pages/models";
import "./styles/globals.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex-1 px-[10%] py-10">
        <Models />
      </div>
    </div>
  );
}

export default App;
