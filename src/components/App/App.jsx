import CardsSection from "components/CardsSection/CardsSection";
import LargePhotoSection from "components/LargePhotoSection/LargePhotoSection";
import PopupSection from "components/PopupSection/PopupSection";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="main__layout">
        <PopupSection />
        <CardsSection />
        <LargePhotoSection />
      </div>
    </div>
  );
}

export default App;
