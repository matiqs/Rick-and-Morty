import toast, { Toaster } from "react-hot-toast";
import * as AiIcons from "react-icons/ai";

const useToast = () => {
  const toastSucces = () =>
    toast.success("Added to favorites!", {
      duration: 1000,
      style: {
        padding: "14px",
        fontSize: "20px",
        borderRadius: "5px",
      },
    });

  const toastWarning = () =>
    toast("already added to favorites...", {
      duration: 1000,
      icon: <AiIcons.AiFillWarning color="#E7C435" />,
      style: {
        padding: "14px",
        fontSize: "20px",
        borderRadius: "5px",
      },
    });

  const toastError = () =>
    toast.error("Removed from favorites...", {
      duration: 1000,
      style: {
        padding: "14px",
        borderRadius: "5px",
      },
    });

  return {
    Toaster,
    toastSucces,
    toastError,
    toastWarning,
  };
};

export default useToast;
