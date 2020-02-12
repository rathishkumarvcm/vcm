/**
  * @jest-environment jsdom
*/

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import ResetPasswordComponent from '../App/Screens/ResetPassword/ResetPasswordComponent';

describe('Current PIN',()=>{

  //  Snap shot 
  it('snap shot', () => {  
    const tree = renderer.create(<ResetPasswordComponent />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //  Render using shallow - shallow not includes child component
  test('render',()=>{
    const component = shallow(<ResetPasswordComponent />);  
    component.render();
  });


});