/**
  * @jest-environment jsdom
*/

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import CurrentPINComponent from '../App/Screens/CurrentPIN/CurrentPINComponent';

describe('Current PIN',()=>{

  //  Snap shot 
  it('snap shot', () => {  
    const tree = renderer.create(<CurrentPINComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //  Render using shallow - shallow not includes child component
  test('render',()=>{
    const component = shallow(<CurrentPINComponent />);  
    component.render();
  });

  //  Function testing
  test('function testing',()=>{
    const component = shallow(<CurrentPINComponent />);
    const wrapper = new CurrentPINComponent();
    component.render();
    wrapper.isEmpty('text');
    wrapper.validateCurrentPIN('pin');
    wrapper.onClickNext();
 });

 //  Input Component matches the length 
 it('Input text matches with length', () => {
    const instanceOf = renderer.create(<CurrentPINComponent />).getInstance();
    instanceOf.validateCurrentPIN('1234');  
    expect(instanceOf.state.userEnteredPIN).toHaveLength(4);
  });

  //  Input Component matches with given input
it('Input text matches with given input',()=>{
    const instanceOf = renderer.create(<CurrentPINComponent />).getInstance();
    instanceOf.validateCurrentPIN('1234');  
    expect(instanceOf.state.userEnteredPIN).toEqual('1234');
  });


});