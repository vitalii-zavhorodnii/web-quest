interface Props {
  value: string;
  handleCodeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CodeInput: React.FC<Props> = ({ value, handleCodeInput }) => {
  return (
    <div>
      <input
        id="code-input"
        type="text"
        value={value}
        onChange={handleCodeInput}
        placeholder="Напиши что-нибудь..."
      />
    </div>
  );
};

export default CodeInput;
