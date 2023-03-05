import React, { useState } from "react";
import IconStar from "./assets/images/icon-star.svg";
import ThanksImage from "./assets/images/illustration-thank-you.svg";
import NumberButton from "./components/NumberButton";

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [showThanks, setShowThanks] = useState(false);

  const handleSelectNumber = (number) => {
    setSelectedNumber(number);
  };

  const handleSubmit = () => {
    if (selectedNumber) {
      setShowThanks(true);
    } else {
      alert("Please select a number");
    }
  };

  return (
    <div className="font-overpass h-screen flex items-center justify-center bg-zinc-900 text-xs">
      {showThanks ? (
        <div className="bg-gradient-to-b from-neutral-darkBlue to-neutral-veryDarkBlue h-80 w-80 p-8 rounded-xl flex flex-col gap-y-4 items-center">
          <img src={ThanksImage} className="w-32" />
          <p className="bg-neutral-darkBlue text-orange rounded-full px-8 py-1">
            You selected {selectedNumber} of 5
          </p>
          <h1 className="text-neutral-white text-2xl font-bold">Thank You!</h1>
          <p className="text-neutral-lightGray text-center">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      ) : (
        <div className="bg-gradient-to-b from-neutral-darkBlue to-neutral-veryDarkBlue h-80 w-80 p-6 rounded-xl flex flex-col gap-y-4">
          <div>
            <img
              className="p-3 bg-neutral-darkBlue rounded-full"
              src={IconStar}
            />
          </div>
          <h1 className="text-neutral-white text-2xl font-bold">
            How did we do?
          </h1>
          <p className="text-neutral-lightGray ">
            Please let us know how we did with your support request. All feedback
            is appreciated to help us improve our offering!
          </p>
          <div className="w-full flex justify-between">
            <NumberButton
              number={1}
              onSelect={handleSelectNumber}
              isSelected={selectedNumber === 1}
            />
            <NumberButton
              number={2}
              onSelect={handleSelectNumber}
              isSelected={selectedNumber === 2}
            />
            <NumberButton
              number={3}
              onSelect={handleSelectNumber}
              isSelected={selectedNumber === 3}
            />
            <NumberButton
              number={4}
              onSelect={handleSelectNumber}
              isSelected={selectedNumber === 4}
            />
            <NumberButton
              number={5}
              onSelect={handleSelectNumber}
              isSelected={selectedNumber === 5}
            />
          </div>
          <button
            className="bg-orange text-neutral-white rounded-full p-2"
            onClick={handleSubmit}
          >
            SUBMIT
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
