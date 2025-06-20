import Button from '../Button';
import TextButton from '../TextButton';

import { ICONS } from '../../constants/icons';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
  decline?: boolean;
  confirm?: boolean;
  closeModal: () => void;
}

const ModalWindow: React.FC<Props> = ({
  children,
  isOpen,
  closeModal,
  decline,
  confirm
}) => {
  return (
    <div
      className={`fixed w-screen h-screen overflow-y-auto p-4 bg-white z-50  top-0 ${isOpen ? 'right-0' : 'right-full'} transition-all duration-400`}
    >
      {decline ? (
        <div className="absolute top-2 right-2">
          <Button
            color="bg-rose-600"
            icon={ICONS.close}
            title="Закрыть"
            onClick={closeModal}
          />
        </div>
      ) : null}

      {children}

      {confirm ? (
        <div className="w-full flex justify-center mt-5">
          <TextButton color="bg-green-700" title="Погнали!" onClick={closeModal} />
        </div>
      ) : null}
    </div>
  );
};

export default ModalWindow;
