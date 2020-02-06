import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import CSMPushNotification from '../App/Screens/CSMPushNotification/CSMPushNotification';
import { GButtonComponent } from '../App/CommonComponents';

const navigation = { navigate: jest.fn()};
describe('Change Sign In Method Push Notification',()=>{

    // Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<CSMPushNotification navigation={navigation} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<CSMPushNotification navigation={navigation} />);  
      component.render();
    });
 // Function testing 
  /* test('function testing',()=>{
    const component = shallow(<CSMPushNotification />);
    const wrapper = new CSMPushNotification;
    component.render();
    wrapper.selectTheQuestion();
    wrapper.selectTheQuestion2();
    wrapper.selectTheQuestion3();
 });  */
});

// mocked function call on button click
it('Called function on button click', () => {       
    const wrapper = shallow(<CSMPushNotification onPress={jest.fn()} />);
    const spy = jest.spyOn(wrapper.instance(), 'onClickSave');
    wrapper.instance().forceUpdate();
    wrapper.find(GButtonComponent).at(2).simulate('press');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();  
  }); 