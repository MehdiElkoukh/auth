import React from "react";
import "./Card.css";
interface Props {
  contenu: React.ReactChild;
}
const Card: React.FC<Props> = props => {
  const { contenu } = props;
  return (
    <div className="card">
      <div className="content">{contenu}</div>
    </div>
  );
};

export default Card;
