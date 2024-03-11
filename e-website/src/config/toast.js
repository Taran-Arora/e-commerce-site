import { toast } from 'react-toastify';
import { Logo, title } from './config';

const toasted = {
    success: async function (message) {
        toast.success(message)
    },
    error: async function (message) {
        toast.error(message);
    }
}
export default toasted;