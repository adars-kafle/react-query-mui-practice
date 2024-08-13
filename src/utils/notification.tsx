import { toast } from "react-toastify";

const notifySuccess = (message: string) => {
  toast.success(message);
};

const notifyError = (message: string) => {
  toast.error(message);
};

export { notifySuccess, notifyError };
