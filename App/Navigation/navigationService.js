import { StackActions, NavigationActions } from 'react-navigation';

let navigator;
let PreviousScreen = '';
export const getPreviousScreen = () => { return PreviousScreen; };

export const setTopLevelNavigator = navigatorRef => {
  navigator = navigatorRef;
};

export const setPreviousScreen = screen => {
  // console.log('screen:', screen);
  PreviousScreen = screen;
};
export const navigate = (routeName, params = {}) => {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
};

export const resetApp = (routeName, params = {}) => {
  const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName, params })],
  });
  navigator.dispatch(resetAction);
};

export const navigateBack = () => {
  navigator.dispatch(NavigationActions.back());
};

export const getNavigator = () => navigator;
