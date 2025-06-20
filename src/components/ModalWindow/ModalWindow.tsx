import { useState } from 'react';
import Button from '../Button';
import { ICONS } from '../../constants/icons';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const ModalWindow: React.FC<Props> = ({ children, isOpen, closeModal }) => {
  return (
    <div
      className={`absolute p-4 w-screen bg-white z-50 h-screen top-0 ${isOpen ? 'right-0' : 'right-full'} transition-all duration-400`}
    >
      <div className="absolute top-2 right-2">
        <Button
          color="bg-rose-600"
          icon={ICONS.close}
          title="Закрыть"
          onClick={closeModal}
        />
      </div>

      {children}
    </div>
  );
};

export default ModalWindow;
