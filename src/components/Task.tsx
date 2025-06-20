interface Props {
  description: string;
  hint: string;
  image: string;
  isHintShown: boolean;
}

const Task: React.FC<Props> = ({ description, hint, image, isHintShown }) => {
  return (
    <div className="max-w-screen flex items-center flex-col">
      <img
        src={`./src/assets/tasks/${image}`}
        alt="task image"
        width={120}
        height={120}
      />
      <div className="text-3xl font-bold underline">{description}</div>
      {isHintShown && <div>{hint}</div>}
    </div>
  );
};

export default Task;
