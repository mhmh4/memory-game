import { useEffect, useState } from "react";
import Card from "./Card";

const N = 5;

function App() {
  const [cards, setCards] = useState<string[]>([]);

  useEffect(() => {
    const newCards = [];
    for (let i = 1; i <= N; i++) {
      newCards.push(String(i));
    }
    for (let i = N; i > 0; i--) {
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
