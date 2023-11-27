import Toast from 'react-native-root-toast';

interface ToastTypes {
  message: string;
  toastLocation: any;
  backgroundColor: string;
}

const showToast = ({message, toastLocation, backgroundColor}: ToastTypes) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions[toastLocation],
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
    backgroundColor,
  });
};

export default showToast;
