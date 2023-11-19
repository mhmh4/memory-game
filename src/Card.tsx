interface CardProps {
  value: string;
}

const Card = (props: CardProps) => {
  return (
    <>
      <div>{props.value}</div>
    </>
  );
};

export default Card;
