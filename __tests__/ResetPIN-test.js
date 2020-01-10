/**
  * @jest-environment jsdom
*/

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResetPINComponent from '../App/Screens/ResetPIN/ResetPINComponent';

describe('Current PIN',()=>{

  //  Snap shot 
  it('snap shot', () => {  
    const tree = renderer.create(<ResetPINComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //  Render using shallow - shallow not includes child component
  test('render',()=>{
    const component = shallow(<ResetPINComponent />);  
    component.render();
  });


});