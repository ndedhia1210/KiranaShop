import { ToastType } from "react-native-toast-notifications";

export enum TOAST_TYPE {
  SUCCESS = "success",
  FAILURE = "danger",
}

export const showNotificationToast = (
  message: string,
  type: TOAST_TYPE,
  toast: ToastType
) => {
  toast.show(message, {
    type,
    placement: "top",
    duration: 2000,
    animationDuration: 200,
    animationType: "slide-in",
  });
};
