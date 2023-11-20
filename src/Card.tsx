interface CardProps {
  value: string;
  onClick: React.MouseEventHandler;
  isSelected: boolean;
  isMatched: boolean;
}

const Card = (props: CardProps) => {
  return (
    <div
      className={`w-40 h-20 p-7 px-10 border rounded border-slate-300 bg-white hover:border-red-500 cursor-pointer ${
        props.isMatched && "bg-blue-500"
      }`}
      onClick={props.onClick}
    >
      {(props.isSelected || props.isMatched) && props.value}
    </div>
  );
};

export default Card;
