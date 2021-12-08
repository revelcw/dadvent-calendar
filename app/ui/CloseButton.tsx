type CloseButtonProps = {
  onClose: () => void;
};

export const CloseButton = ({ onClose }: CloseButtonProps) => (
  <span>
    <button className="close-button" onClick={onClose} aria-label="Close">
      <span aria-hidden>×</span>
    </button>
  </span>
);
