import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import VerifySSN from '../App/Screens/VerifySSN/VerifySSNComponent';
import { GButtonComponent } from '../App/CommonComponents';

describe('Verify SSN ',()=>{

  //  Snap shot 
  it('snap shot', () => {  
    const tree = renderer.create(<VerifySSN />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  //  Render using shallow - shallow not includes child component
  test('render',()=>{
    const component = shallow(<VerifySSN />);  
    component.render();
  });

  //  Function testing
  test('function testing',()=>{
    const component = shallow(<VerifySSN />);
    const wrapper = new VerifySSN();
    component.render();

    wrapper.onClickNext();
 });

 //  Input Component matches the length 
it('Input text matches with length', () => {
  const instanceOf = renderer.create(<VerifySSN />).getInstance();
  instanceOf.setSocialSecurityNumber('123456789');  
  expect(instanceOf.state.socialSecurityNumber).toHaveLength(9);
});

 //  Input Component matches with given input
it('Input text matches with given input',()=>{
  const instanceOf = renderer.create(<VerifySSN />).getInstance();
  instanceOf.setSocialSecurityNumber('123456789');
  expect(instanceOf.state.socialSecurityNumber).toEqual('123456789');
});

//  mocked function call on button click
it('Called function on button click', () => {       
  const wrapper = shallow(<VerifySSN onPress={jest.fn()} />)
  const spy = jest.spyOn(wrapper.instance(), 'onClickNext');
  wrapper.instance().forceUpdate();
  wrapper.find(GButtonComponent).at(1).simulate('press');
  expect(spy).toHaveBeenCalled();
  spy.mockClear();  
});

//  //  mocked function call on button click
//  it('should call mocked function', () => {  
//    const mockedfn = jest.fn();
//    const wrapper = shallow(<VerifySSN />);

//    expect(wrapper.find(GButtonComponent).first()).toHaveLength(1);
//    wrapper.find(GButtonComponent).first().props().onPress();
//    wrapper.find(GButtonComponent).first().simulate('press');
//    expect(mockedfn).toHaveBeenCalledTimes(1);  
  
//  });

});