import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import CSMSoftToken from '../App/Screens/CSMSoftToken/CSMSoftTokenComponent';
import { GButtonComponent } from '../App/CommonComponents';


const navigation = { navigate: jest.fn()};
describe('Change Sign In Method SoftToken',()=>{

    // Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<CSMSoftToken navigation={navigation} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<CSMSoftToken navigation={navigation} />);  
      component.render();
    });
 // Function testing 
  /* test('function testing',()=>{
    const component = shallow(<ChangeSignInMethod />);
    const wrapper = new ChangeSignInMethod;
    component.render();
    wrapper.selectTheQuestion();
    wrapper.selectTheQuestion2();
    wrapper.selectTheQuestion3();
 });  */
});

// mocked function call on button click
 it('Called function on button click', () => {       
    const wrapper = shallow(<CSMSoftToken onPress={jest.fn()} />);
    const spy = jest.spyOn(wrapper.instance(), 'onClickSave');
    wrapper.instance().forceUpdate();
    wrapper.find(GButtonComponent).at(2).simulate('press');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();  
  }); 