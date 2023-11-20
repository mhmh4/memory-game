import { useEffect, useState } from "react";
import Card from "./Card";

const N = 5;

function App() {
  const [cards, setCards] = useState<string[]>([]);
  const [matched, setMatched] = useState(new Set());

  const [selections, setSelections] = useState<Set<number>>(new Set<number>());

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

  useEffect(() => {
    if (selections.size === 2) {
      const [index1, index2] = selections;

      const selection1 = cards[index1];
      const selection2 = cards[index2];

      console.log(selection1, selection2);
      if (selection1 === selection2) {
        console.log("match");
        setMatched((curMatched) => {
          const newMatched = new Set(curMatched);
          console.log(curMatched);
          newMatched.add(selection1);
          return newMatched;
        });
      } else {
        console.log("no match");
      }
    }
  }, [selections]);

  function handleClick(index: number) {
    setSelections((currentSelections) => {
      const newSelections = new Set(currentSelections);
      newSelections.add(index);
      return newSelections;
    });
  }

  return (
    <>
      <div className="bg-slate-800 h-screen pt-12">
        <div className="grid grid-cols-5 w-2/3 mx-auto">
          {cards.map((card, index) => {
            return (
              <Card
                key={index}
                value={card}
                isSelected={selections.has(index)}
                onClick={() => handleClick(index)}
              ></Card>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
