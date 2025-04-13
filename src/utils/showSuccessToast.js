import { toast } from "react-toastify";

export const showToast = (message) => {
  toast.success(message, {
    icon: false,
    hideProgressBar: true,
    style: { color: "#002244" },
    autoClose: 1000,
  });
};
