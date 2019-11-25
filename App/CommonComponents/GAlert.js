/* **************************\
Function: showAlertWithCancelButton.
Explanation:
Common method to show the popup with two buttons , title and message.
Each button will have its standalone call back
============================


\************************** */

import { Alert } from "react-native";

function showAlertWithCancelButton(
  title,
  text,
  okButtonLabel,
  cancelButtonLabel,
  okCallback,
  cancelCallback
) {
  return Alert.alert(
    title,
    text,
    [
      { text: okButtonLabel, onPress: okCallback },
      { text: cancelButtonLabel, onPress: cancelCallback }
    ],
    { cancelable: false }
  );
}

function showAlert(title, text, okButtonLabel, okCallback) {
  return Alert.alert(
    title,
    text,
    [{ text: okButtonLabel, onPress: okCallback }],
    { cancelable: false }
  );
}

export { showAlert, showAlertWithCancelButton };
