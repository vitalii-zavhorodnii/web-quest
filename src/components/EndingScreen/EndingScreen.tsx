const EndingScreen: React.FC = () => {
  return (
    <div className="flex flex-col align-center">
      <h1 className="w-full text-center text-4xl mb-7">Ты сделала это!</h1>
      <img
        className="w-auto rounded-xl"
        src="assets/modals/my-little-pony.jpg"
        alt="rarity"
      />
      <p className="mt-8 px-2 whitespace-pre-line text-xl">
        {`Юхуууу! Какой класс, что ты решила все задачки!`}
      </p>
    </div>
  );
};

export default EndingScreen;
