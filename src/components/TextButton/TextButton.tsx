interface Props {
  title: string;
  color: string;
  onClick: () => void;
}

const TextButton: React.FC<Props> = ({ title, color, onClick }) => {
  return (
    <button
      className={`py-3 px-8 min-w-12 min-h-12 rounded-lg ${color} text-white text-2xl`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default TextButton;
