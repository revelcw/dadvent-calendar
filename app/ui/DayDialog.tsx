import Dialog from '@reach/dialog';
import { CloseButton } from './CloseButton';
import { Joke } from '~/types/Joke.type';

type DayDialogProps = {
  joke: Joke;
  onDismiss: () => void;
};

export const DayDialog = ({ joke, onDismiss }: DayDialogProps) => {
  const { q: question, a: answer } = joke;

  return (
    <Dialog isOpen={true} onDismiss={onDismiss} aria-label="Answer dialog">
      <CloseButton onClose={onDismiss} />
      <div className="question">{question}</div>
      {answer && (
        <details>
          <summary>Answer</summary>
          <div className="answer">{answer}</div>
        </details>
      )}
    </Dialog>
  );
};
