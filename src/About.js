import React from 'react';
import Dialog from '@reach/dialog';
import { CloseButton } from './CloseButton';
import { useDialog } from './useDialog';

export const About = () => {
  const { isOpen, openDialog, closeDialog } = useDialog();

  return (
    <>
      <Dialog isOpen={isOpen} onDismiss={closeDialog}>
        <div className="about">
          <CloseButton onClose={closeDialog} />

          <h2>Hello, I'm Revel Carlberg West</h2>
          <p>
            I'm 11 years old and I love coding. I started my "career" in React
            development at the ripe old age of 9 with a talk about React Hooks
            at a meetup in New York City.
          </p>
          <p>
            <iframe
              title="Revel at ReactNYC"
              src="https://www.youtube.com/embed/mbiryVTIJ4Q"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </p>
          <p>
            I've learned at lot since I was a kid and have even given a talk at
            a much larger venue:{' '}
            <a
              href="https://www.youtube.com/watch?v=SCUIEQryBZ8"
              rel="noopener noreferrer"
              target="_blank"
            >
              React Rally
            </a>{' '}
            in Salt Lake City.
          </p>
          <p>
            So follow me on Twitter at{' '}
            <a
              href="https://twitter.com/revelcw"
              rel="noopener noreferrer"
              target="_blank"
            >
              @revelcw
            </a>
            . And if you like my Dadvent Calendar, please tweet about it.
            Thanks!
          </p>
        </div>
      </Dialog>

      <h2>
        by 11 year old Revel Carlberg West{' '}
        <button className="about-button" onClick={openDialog}>
          About Me
        </button>
      </h2>
    </>
  );
};
