import React, { useState } from "react";
import Dialog from "@reach/dialog";
import "@reach/dialog/styles.css";
import { ReactComponent as LockIcon } from "./lock.svg";

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
        {/* This is the question of the joke */}
        <p>{joke.q}</p>
        <div>
          {/* This is the button to show the answer */}
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
          {/* This is the answer */}
          <div>{showAnswer && joke.a ? joke.a : null}</div>
        </div>
      </Dialog>

      <div
        title={
          locked
            ? `Locked (Opens on Dec ${number})`
            : `Joke door for Dec ${number}`
        }
        className="door"
      >
        <button onClick={open} disabled={locked}>
          {locked ? "Locked" : "Open"}
        </button>
        {locked ? <LockIcon /> : <div className="number">{number}</div>}
        {locked && <div className="locked-number">{number}</div>}
      </div>
    </>
  );
};

export default Door;
