import { PixelRatio } from 'react-native';

import {
    widthPercentageToDP,
    heightPercentageToDP
} from "../Local_Modules/react-native-responsive-screen";

/*
Assumption to use this function:

The value received is given as per the size required for mdpi device.
For Example:
if the given UX and its style guide is for Xhdpi devices but our application
needs to be developed for all the device resolutions, then convert the given value 
to the value equilent to the size for mdpi device.
Let consider, 40 is the font value given in the style guide created for Xhdpi device.
First, when develop the screen, convert the value to mdpi by divide it by 2. 
Now,The result is in mdpi. Call this method with the mdpi value.
so, in future on whichever device resolution, app will scale this value to the current 
device resolution.

Note: Resolution should be used only for fontSize. For padding size, height, width etc.. should
be given in % value to support for orientation.
*/

const convertToDeviceResolution = function (dp) {

    //Get current device resolution.
    //https://facebook.github.io/react-native/docs/pixelratio#getpixelsizeforlayoutsize
    // let deviceResolution = PixelRatio.get();

    //Multiply the given value with current device resolution.
    let currentValue = PixelRatio.getPixelSizeForLayoutSize(dp);// * deviceResolution;

    return currentValue;
};

const scale = size => {
    let mdpi = size / 3;
    let cal = PixelRatio.get() * mdpi;
    return cal;
};

const scaledHeight = size => {
    // let baseSize = size/3;
    // let calSizeRatio = PixelRatio.get();
    // let calSize = (baseSize*calSizeRatio);


    // alert('Size '+ size+" baseSize "+baseSize+" calSizeRatio "+calSizeRatio+" calSize "+calSize)
    let isString = "" + size;
    let index = isString.indexOf("%");
    let heightRatio = 0;
    if (index === -1) {
        // alert('not a string index '+index)
        heightRatio = (size * 100) / 812;
    } else {
        // alert('string index '+index)
        heightRatio = isString;
    }
    let calHeight = heightPercentageToDP("" + heightRatio); //(height*heightRatio)/100
    // console.log(calHeight)
    return calHeight;
};

const scaledWidth = size => {
    // alert(PixelRatio.get())
    let isString = "" + size;
    let index = isString.indexOf("%");
    let widthRatio = 0;
    if (index === -1) {
        widthRatio = (size * 100) / 374;
    } else {
        widthRatio = size;
    }
    let calWidth = widthPercentageToDP("" + widthRatio); //(width*widthRatio)/100

    return calWidth;
};

export { convertToDeviceResolution, scaledWidth, scaledHeight, scale };