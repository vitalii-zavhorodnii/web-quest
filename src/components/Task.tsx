interface Props {
  description: string;
  hint: string;
  image: string;
  isHintShown: boolean;
}

const Task: React.FC<Props> = ({ description, hint, image, isHintShown }) => {
  return (
    <div className="max-w-screen flex items-center flex-col">
      <img className="h-[200px] rounded-md" src={`./src/assets/tasks/${image}`} alt="task image" />
      <div className="mt-8 px-2 whitespace-pre-line text-xl">{description}</div>
    </div>
  );
};

export default Task;
