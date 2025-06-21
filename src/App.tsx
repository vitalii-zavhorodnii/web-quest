import { useState } from 'react';

import Task from './components/Task';
import CodePad from './components/CodePad';
import Button from './components/Button';
import ModalWindow from './components/ModalWindow';
import WelcomeScreen from './components/WelcomeScreen';
import EndingScreen from './components/EndingScreen';

import { TASK_LIST } from './constants/task-list';
import { ICONS } from './constants/icons';

function App() {
  const [currentTaskId, setCurrentTaskId] = useState(0);
  const [inputCodeValue, setInputCodeValue] = useState('');
  const [isCodePadOpen, setCodePadOpen] = useState(false);
  const [isWelcomeOpen, setWelcomeOpen] = useState(true);
  const [isEndingOpen, setEndingOpen] = useState(false);

  const { description, hint, code, image } = TASK_LIST[currentTaskId];

  const handleCodeInput = (inputCode: string) => {
    if (parseInt(inputCode) === code) {
      setCodePadOpen(false);

      if (currentTaskId < TASK_LIST.length - 1) {
        setCurrentTaskId((state) => state + 1);
      }

      if (currentTaskId === TASK_LIST.length - 1) {
        setEndingOpen(true);
      }
    }
  };

  const handleCodePadWindow = () => {
    setCodePadOpen(false);
    setInputCodeValue('');
  };

  return (
    <main className="relative w-full  p-4 pt-7">
      <ModalWindow
        isOpen={isWelcomeOpen}
        closeModal={() => setWelcomeOpen(false)}
        confirm
      >
        <WelcomeScreen />
      </ModalWindow>

      <ModalWindow isOpen={isEndingOpen} closeModal={() => setEndingOpen(false)}>
        <EndingScreen />
      </ModalWindow>

      <ModalWindow isOpen={isCodePadOpen} closeModal={handleCodePadWindow} decline>
        <CodePad value={inputCodeValue} handleCodeInput={handleCodeInput} />
      </ModalWindow>

      <Task description={description} hint={hint} image={image} />

      <div className="fixed right-3 bottom-3 pb-safe-bottom">
        <Button
          icon={ICONS.enterCode}
          title="Ввести код"
          color="bg-sky-400"
          onClick={() => setCodePadOpen(true)}
        />
      </div>
    </main>
  );
}

export default App;
