import React from "react";

function NumberButton(props) {
  const { number, onSelect, isSelected } = props;

  const handleClick = () => {
    onSelect(number);
  };

  return (
    <button
      className={`bg-neutral-darkBlue ${
        isSelected ? "opacity-100 bg-orange" : "opacity-70"
      } text-neutral-white text-xs font-bold py-[13px] px-[18px] rounded-full`}
      onClick={handleClick}
      disabled={isSelected}
    >
      {number}
    </button>
  );
}

export default NumberButton;
