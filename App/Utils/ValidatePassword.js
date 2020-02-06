import gblStrings from '../Constants/GlobalStrings';

const ValidatePassword = pswd => {
    // console.log("password : " +pswd);
    const password = pswd;
    let strength = "";
    let score = 0;
    let noOfCharacters = 0;
    let noOfUppercase = 0;
    let noOfLowercase = 0;
    let noOfDigits = 0;
    let noOfSymbols = 0;
    let lettersOnly = 0;
    let digitsOnly = 0;
    let countConsecDigits = 0;
    let consecutiveNo = 0;
    let countConsecLC = 0;
    let consecutiveLowerCase = 0;
    let countConsecUC = 0;
    let consecutiveUpperCase = 0;
    // let middleNumbers = 0;
    // let middleSymbols = 0;
    // let middleNumbersNSymbol = 0;
    let i = 0;

    noOfCharacters = password.length;
    // console.log("noOfCharacters : " + noOfCharacters);

    for (i = 0; i < password.length; i+=1) {
        const char = password.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            noOfUppercase += 1;
        }
        else if (char >= 97 && char <= 122) {
            noOfLowercase += 1;
        } else if (char >= 48 && char <= 57) {
            noOfDigits += 1;
        } else if ((char >= 33 && char <= 47) || (char >= 58 && char <= 64) || (char >= 91 && char <= 96) || (char >= 123 && char <= 125) || char === 239) {
            noOfSymbols += 1;
        }
    }
    // console.log("noOfUppercase  : " + noOfUppercase);
    // console.log("noOfLowercase  : " + noOfLowercase);
    // console.log("noOfDigits  : " + noOfDigits);
    // console.log("noOfSymbols  : " + noOfSymbols);

    // for (i = 1; i < password.length - 1; i+=1) {
    //     if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
    //         middleNumbers += 1;
    //     }
    //     if ((password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 47) || (password.charCodeAt(i) >= 58 && password.charCodeAt(i) <= 64) || (password.charCodeAt(i) >= 91 && password.charCodeAt(i) <= 96) || (password.charCodeAt(i) >= 123 && password.charCodeAt(i) <= 125) || password.charCodeAt(i) == 239) {
    //         middleSymbols += 1;
    //     }
    // }
    // middleNumbersNSymbol = middleSymbols + middleNumbers;
    // console.log("middleNumbersNSymbol  : " + middleNumbersNSymbol);

    if (noOfSymbols === 0 && noOfDigits === 0) {
        lettersOnly = noOfLowercase + noOfUppercase;
    }
    // console.log("lettersOnly  : " + lettersOnly);
    if (noOfSymbols === 0 && noOfLowercase === 0 && noOfUppercase === 0) {
        digitsOnly = noOfDigits;
    }
    // console.log("digitsOnly  : " + digitsOnly);

    for (i = 0; i < password.length; i+=1) {
        if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
            countConsecLC += 1;
        } else {
            if (countConsecLC > 1) {
                consecutiveLowerCase += countConsecLC - 1;
            }
            countConsecLC = 0;
        }
        if (i === password.length - 1) {
            if (countConsecLC > 1) {
                consecutiveLowerCase += countConsecLC - 1;
            }
        }
    }
    // console.log("consecutiveLowerCase : " + consecutiveLowerCase);

    for (i = 0; i < password.length; i+=1) {
        if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
            countConsecUC += 1;
        } else {
            if (countConsecUC > 1) {
                consecutiveUpperCase += countConsecUC - 1;
            }
            countConsecUC = 0;
        }
        if (i === password.length - 1) {
            if (countConsecUC > 1) {
                consecutiveUpperCase += countConsecUC - 1;
            }
        }
    }
    // console.log("consecutiveUpperCase : " + consecutiveUpperCase);

    for (i = 0; i < password.length; i+=1) {
        if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
            countConsecDigits += 1;
        } else {
            if (countConsecDigits > 1) {
                consecutiveNo += countConsecDigits - 1;
            }
            countConsecDigits = 0;
        }
        if (i === password.length - 1) {
            if (countConsecDigits > 1) {
                consecutiveNo += countConsecDigits - 1;
            }
        }
    }
    // console.log("consecutiveNo : " + consecutiveNo);

    score = score + (noOfCharacters * 4) + ((noOfCharacters - noOfUppercase) * 2) + ((noOfCharacters - noOfLowercase) * 2) + (noOfDigits * 4) + (noOfSymbols * 6) - lettersOnly - digitsOnly - (consecutiveUpperCase * 2) - (consecutiveLowerCase * 2) - (consecutiveNo * 2);
    // console.log("score -----> " +score);

    if(score >=0 && score <=39){
        strength = gblStrings.userManagement.weak;
    }else if(score >=40 && score <=79){
        strength = gblStrings.userManagement.good;
    }else{
        strength = gblStrings.userManagement.strong;
    }
    // console.log("strength : " + strength);
    return strength;

};


export default ValidatePassword;



























