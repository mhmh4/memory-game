import { useEffect, useState } from "react";
import Card from "./Card";

const N = 5;

function App() {
  const [cards, setCards] = useState<string[]>([]);
  const [isSelected, setIsSelected] = useState<boolean[]>([]);
  const [numSelections, setNumSelections] = useState(0);
  const [matched, setMatched] = useState(new Set());

  useEffect(() => {
    const newCards = [];
    for (let i = 1; i <= N; i++) {
      newCards.push(String(i));
    }
    for (let i = N; i > 0; i--) {
      newCards.push(String(i));
    }
    setIsSelected(new Array(N).fill(false));
    setCards(newCards);
  }, []);

  useEffect(() => {
    if (numSelections === 2) {
      const selection1 = cards[isSelected.findIndex((value) => value === true)];
      const selection2 =
        cards[isSelected.findLastIndex((value) => value === true)];
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
  }, [isSelected]);

  function handleClick(index: number) {
    setIsSelected((curisSelected) => {
      const newIsSelected = [...curisSelected];
      newIsSelected[index] = true;
      return newIsSelected;
    });
    setNumSelections(() => {
      return numSelections + 1;
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
                isSelected={isSelected[index]}
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
