import React, { useState } from 'react';
import Dialog from '@reach/dialog';
import '@reach/dialog/styles.css';
import { ReactComponent as LockIcon } from './lock.svg';
import { CloseButton } from './CloseButton';
import { useDialog } from './useDialog';

const Door = ({ number, date }) => {
  const { isOpen, openDialog, closeDialog } = useDialog();

  // const locked = number > date;
  const locked = false;
  const [joke, setJoke] = useState({});
  const [status, setStatus] = useState('ready');
  const [showAnswer, setShowAnswer] = useState(false);
  const close = () => {
    closeDialog();
    setShowAnswer(false);
  };

  return (
    <>
      <Dialog isOpen={isOpen} onDismiss={close}>
        <>
          <CloseButton onClose={close} />
          {status === 'loading' && <h2>loading...</h2>}
          {status === 'too early' && <h2>You can't open this door yet!</h2>}
          {status === 'error' && <h2>Oops… Error fetching joke.</h2>}
          {status === 'ready' && (
            <>
              {/* This is the question of the joke */}
              <p>{joke.q}</p>
              <div>
                {/* This is the button to show the answer */}
                <div>
                  {joke.a && (
                    <button
                      className="show-answer"
                      onClick={() => setShowAnswer(!showAnswer)}
                    >
                      {showAnswer ? 'Hide' : 'Show'} Answer
                    </button>
                  )}
                </div>
                <br />
                {/* This is the answer */}
                <div>{showAnswer && joke.a}</div>
              </div>
            </>
          )}
        </>
      </Dialog>

      <div
        title={
          locked
            ? `Locked. Opens on Dec ${number}`
            : `Joke door for Dec ${number}`
        }
        className="door"
      >
        <button
          onClick={async () => {
            setStatus('loading');
            openDialog();
            try {
              const resp = await fetch(`/.netlify/functions/jokes/${number}`);
              console.log({ resp });
              if (!resp.ok) {
                setStatus('too early');
                return;
              }
              const joke = await resp.json();
              setJoke(joke);
              setStatus('ready');
            } catch (ex) {
              setStatus('error');
            }
          }}
          disabled={locked}
        >
          {locked ? 'Locked' : 'Open'}
        </button>
        {locked ? <LockIcon /> : <div className="number">{number}</div>}
        {locked && <div className="locked-number">{number}</div>}
      </div>
    </>
  );
};

export default Door;
