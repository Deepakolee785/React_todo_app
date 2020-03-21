import { toast } from 'react-toastify';

const notify = (type, message) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      break;
    case 'error':
      toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      break;
    case 'info':
      toast.info(message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
      break;
    default:
      toast(message, {
        position: toast.POSITION.BOTTOM_RIGHT
      });
  }
};
export default notify;
