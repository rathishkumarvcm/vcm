/* eslint-disable import/prefer-default-export */

const AppUtils = {
    enableDebugLog:true,
    debugLog: (printLog) => {
        //  Debugger Log
        if(AppUtils.enableDebugLog){
          console.log(`::React Log::  ${printLog}`);
        }
      },
};

export default AppUtils;