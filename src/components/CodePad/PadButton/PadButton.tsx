interface Props {
  title: string;
  icon?: string;
  color: string;
  onClick: () => void;
}

const PadButton: React.FC<Props> = ({ title, icon, color, onClick }) => {
  return (
    <button
      className={`w-20 h-20 ${color} rounded-lg text-white text-3xl flex justify-center items-center`}
      onClick={onClick}
    >
      {icon ? <img src={icon} alt="icon" width={48} /> : title}
    </button>
  );
};

export default PadButton;
