interface CardProps {
  value: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="w-40 p-7 px-10 border rounded border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 cursor-pointer">
      {props.value}
    </div>
  );
};

export default Card;
