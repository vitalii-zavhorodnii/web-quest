interface Props {
  description: string;
  hint: string;
  image: string;
}

const Task: React.FC<Props> = ({ description, image }) => {
  return (
    <div className="max-w-screen flex items-center flex-col">
      <img
        className="h-[200px] rounded-md"
        src={`assets/tasks/${image}`}
        alt="task image"
      />
      <div className="mt-8 px-2 whitespace-pre-line text-xl">{description}</div>
    </div>
  );
};

export default Task;
