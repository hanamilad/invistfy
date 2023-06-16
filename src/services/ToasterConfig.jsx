import { toast } from "react-toastify";

const ToasterConfig = (message, type) => {
  if (type === "error") {
    toast.error(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
  if (type === "info") {
    toast.info(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
  if (type === "success") {
    toast.success(message, {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  }
};
export default ToasterConfig;
