//React Native Library for securely storing keys to iOS and Android devices in KeyChain and KeyStore respectively
import RNSecureKeyStore from "react-native-secure-key-store";

/* **************************\
  Function: SetKeyValueToStore.
  Explanation:
  This method will be used to store the values in persistant store
  The values will be stored based on key 
  the stored value will be in keystore
\************************** */

export function SetKeyValueToStore(key, value, callBack) {
  RNSecureKeyStore.set(key, value).then(
    res => {
      if (callBack != null) {
        return callBack(res);
      }
      return null;
    },
    err => {
      if (callBack != null) {
        return callBack(err);
      }
      return null;
    }
  );
}

/* **************************\
  Function: GetKeyValueFromStore.
  Explanation:
  This method will be used to get the values from persistant store
  The values will be retirved based on key 
\************************** */

export function GetKeyValueFromStore(key, callBack) {
  RNSecureKeyStore.get(key).then(
    res => callBack(res),
    err => {
      console.log(err);
      return callBack("Error");
    }
  );
}

export async function GetValueFromStoreSync(key, callBack) {
  const returnValue = await RNSecureKeyStore.get(key);

  return callBack(returnValue);
}

/* **************************\
  Function: RemoveKeyValueFromStore.
  Explanation:
  This method will be used to remove the values from persistant store
  The values will be removed based on key 
\************************** */

export function RemoveKeyValueFromStore(key, callBack) {
  RNSecureKeyStore.remove(key).then(
    res => callBack(res),
    err => callBack(err)
  );
}
