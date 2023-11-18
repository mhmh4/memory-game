import { useEffect, useState } from "react";

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
      {cards.map((card, index) => {
        return <div key={index}>{card}</div>;
      })}
    </>
  );
}

export default App;
