import React, { useCallback } from "react";
import { useNavigate } from "react-router";

const Error = () => {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate('/');
  });

  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={handleClick}>GO TO MAIN</button>
      ERROR
    </div>
  )
};

export default Error;