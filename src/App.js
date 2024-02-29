import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SubFooter from "./components/SubFooter";
import SmallCard from "./components/SmallCard";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Card />
      <SmallCard />
      <SubFooter />
      <Footer />
    </div>
  );
}

export default App;
