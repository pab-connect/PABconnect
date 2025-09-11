import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import IndexAgente from "./pages/IndexAgente"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar isDesktop={true} />
      </div>
      <div>
        <IndexAgente />
      </div>
      <Footer />
    </div>
  );
}

export default App;
