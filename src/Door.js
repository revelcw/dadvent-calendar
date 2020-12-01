import React, { useState } from "react";
import Dialog from "@reach/dialog";
import "@reach/dialog/styles.css";

const Door = ({ number, date, joke }) => {
  const locked = number > date;
  const [showDialog, setShowDialog] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => {
    setShowDialog(false);
    setShowAnswer(false);
  };

  return (
    <>
      <Dialog isOpen={showDialog} onDismiss={close}>
        <span>
          <button className="close-button" onClick={close}>
            <span aria-hidden>×</span>
          </button>
        </span>
        <p>{joke.q}</p>
        <div>
          <div>
            {joke.a ? (
              <button
                className="show-answer"
                onClick={() => setShowAnswer(!showAnswer)}
              >
                {showAnswer ? "Hide" : "Show"} Answer
              </button>
            ) : null}
          </div>
          <br />
          <div>{showAnswer && joke.a ? joke.a : null}</div>
        </div>
      </Dialog>

      <div className="door">
        <button onClick={open} disabled={locked}>
          {locked ? "Locked" : "Open"}
        </button>
        <div className="number">{number}</div>
      </div>
    </>
  );
};

export default Door;
