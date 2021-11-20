import React, { useCallback } from "react";
import { useNavigate } from "react-router";

const Card = () => {
  const navigate = useNavigate();
  const handleClick = useCallback((e) => {
    navigate(-1);
  });

  return (
    <div>
      <button onClick={handleClick} className="back-button">BACK</button>
      CARD
    </div>
  );
};

export default Card;