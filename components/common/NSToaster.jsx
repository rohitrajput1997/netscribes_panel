import { toast } from 'react-toastify';

const NSToaster = () => {
    return {
        success(message) {
            return toast.success(message);
        },
        error(message) {
            return toast.error(String(message));
        },
        warning(message) {
            return toast.warning(String(message));
        },
        info(message) {
            return toast.info(String(message));
        },
    };
};

export default NSToaster();
