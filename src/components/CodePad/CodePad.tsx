import PadButton from './PadButton';

import { TEXTS } from '../../constants/texts';
import { ICONS } from '../../constants/icons';
import { useState } from 'react';

interface Props {
  value: string;
  handleCodeInput: (value: string) => void;
}

const CodeInput: React.FC<Props> = ({ handleCodeInput }) => {
  const [code, setCode] = useState('');

  const buttons = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];

  const handleButtonClick = (value: string) => {
    if (code.length < 4) {
      setCode((state) => state + value);
    }
  };

  const handleBackspace = () => {
    setCode((state) => state.slice(0, -1));
  };

  const renderNumberPad = () => {
    const markup = buttons.map((value) => {
      return (
        <li key={value} className="">
          <PadButton
            title={String(value)}
            color="bg-indigo-500"
            onClick={() => handleButtonClick(String(value))}
          />
        </li>
      );
    });

    return markup;
  };

  return (
    <div className="w-full">
      <h1 className="w-full text-center text-4xl mb-7">{TEXTS.enterCode}</h1>
      <h2 className="min-h-20 w-full text-center text-7xl mb-8">{code}</h2>

      <div className="flex justify-center items-center ">
        <ul className="grid grid-cols-3 gap-8 mx-auto">
          {renderNumberPad()}

          <li className="col-start-3 row-start-4">
            <PadButton
              title="ok"
              color="bg-green-400"
              icon={ICONS.ok}
              onClick={() => {
                handleCodeInput(code);
                setCode('');
              }}
            />
          </li>

          <li className="col-start-1 row-start-4">
            <PadButton
              title="backspace"
              color="bg-red-400"
              icon={ICONS.backspace}
              onClick={handleBackspace}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CodeInput;
