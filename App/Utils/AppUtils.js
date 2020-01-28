
const AppUtils = {
  enableDebugLog: true,
  debugLog: (printLog) => {
    //  Debugger Log
    if (AppUtils.enableDebugLog) {
      console.log(`::React Log::  ${printLog}`);
    }
  },
  replaceUndefinedOrNull: (key, value) => {
    if (value === null || value === undefined || value === '') {
      return undefined;
    }
    return value;
  },
  getCleanedPayload: (payload) => {
    const cleanedObject = JSON.stringify(payload, AppUtils.replaceUndefinedOrNull, 4);
    return JSON.parse(cleanedObject);
  },

};

export default AppUtils;