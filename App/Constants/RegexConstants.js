/* **************************\
Component: Regex
Explanation:
Global regex constants to validate email and password for its standards
============================

\*************************** */
const strPwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
export const passwordRegex = strPwd;
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
export const allow_Nine_Numeric = /^[0-9]{9}$/;
export const allow_Four_Numeric = /^[0-9]{4}$/;
export const zipCodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;