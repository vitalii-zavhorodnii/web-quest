const WelcomeScreen: React.FC = () => {
  return (
    <div className="flex flex-col align-center">
      <h1 className="w-full text-center text-4xl mb-7">Привет, красотка!</h1>
      <img className="w-auto" src="assets/modals/rarity-binocular.png" alt="rarity" />
      <p className="mt-8 px-2 whitespace-pre-line text-xl">
        {`Я тут немного занята, наткнулась на очень странные записи, выглядит как шифр. 
        
        И, если честно, то мне нужна твоя помощь. Знаю только то, что
        если их разгадать, то можно найти место с кодом, который позволит прочитать
        следующие загадки. Его нужно ввести на панели кодовой, если нажать на кнопку
        внизу справа. 
        
        Уууу... как не терпиться начать, надеюсь в конце мы отыщем,
        что-то классное!`}
      </p>
    </div>
  );
};

export default WelcomeScreen;
