import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState<string[]>([]);

  useEffect(() => {
    setCards(["1", "2", "3"]);
  }, []);

  return (
    <>
      {cards?.map((card, index) => {
        return <div key={index}>{card}</div>;
      })}
    </>
  );
}

export default App;
