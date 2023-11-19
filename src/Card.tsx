interface CardProps {
  value: string;
  onClick: React.MouseEventHandler;
}

const Card = (props: CardProps) => {
  return (
    <div
      className="w-40 p-7 px-10 border rounded border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 cursor-pointer"
      onClick={props.onClick}
    >
      {props.value}
    </div>
  );
};

export default Card;
