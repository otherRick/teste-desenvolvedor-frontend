interface iButton {
  onClick: () => void;
  disabled: boolean;
  text: string;
}

export const Button = ({ onClick, disabled, text }: iButton) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};
