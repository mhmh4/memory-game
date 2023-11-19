import { useEffect, useState } from "react";
import Card from "./Card";

function App() {
  const [cards, setCards] = useState<string[]>([]);

  useEffect(() => {
    const newCards = [];
    for (let i = 1; i <= 10; i++) {
      newCards.push(String(i));
    }
    setCards(newCards);
  }, []);

  return (
    <>
      <div className="bg-slate-800 h-screen">
        <div className="grid grid-cols-5">
          {cards.map((card, index) => {
            return <Card key={index} value={card}></Card>;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
