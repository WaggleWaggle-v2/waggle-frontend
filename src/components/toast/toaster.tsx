import Toast from '@components/toast/toast';
import { useToast } from '@hooks/useToast';

const Toaster = () => {
  const { toasts } = useToast();

  return (
    <>
      {toasts.map(toast => {
        return (
          <Toast key={toast.id} show={toast.show}>
            {toast.message}
          </Toast>
        );
      })}
    </>
  );
};

export default Toaster;
