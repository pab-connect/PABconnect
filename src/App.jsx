import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar isDesktop={true} />
        <main className="flex-1 p-4">
          <Profile />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App;
