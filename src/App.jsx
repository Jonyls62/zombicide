import { useState } from "react";
import ResponsiveImage from "./ResponsiveImage";
import cards from "./cards.json";

const App = () => {
  const [currentCard, setCurrentCard] = useState(null);

  const drawRandomCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCurrentCard(cards[randomIndex]);
  };

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="mb-0">
        {currentCard ? "" : "Tomar una Carta"}
      </h1>

      {currentCard && (
        <ResponsiveImage src={currentCard.image} alt={currentCard.name} />
      )}

      <button
        onClick={drawRandomCard}
        className="btn btn-primary btn-lg mt-0"
      >
        {currentCard ? "Tomar Otra Carta" : "Tomar una Carta"}
      </button>
    </div>
  );
};

export default App;
