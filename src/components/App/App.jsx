import CardsSection from "components/CardsSection/CardsSection";
import PopupSection from "components/PopupSection/PopupSection";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="main__layout">
        <PopupSection />
        <CardsSection />
      </div>
    </div>
  );
}

export default App;
