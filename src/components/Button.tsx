interface Props {
  title: string;
  icon?: string;
  color: string;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ title, icon, onClick, color }) => {
  // const bgColor =

  return (
    <button className={`min-w-12 min-h-12 rounded-lg ${color}`} onClick={onClick}>
      {icon ? <img src={icon} alt="icon" width={48} /> : title}
    </button>
  );
};

export default Button;
