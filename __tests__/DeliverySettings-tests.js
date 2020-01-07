import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import DeliverySettings from '../App/Screens/DeliverySettings/DeliverySettingsComponent';

describe('Delivery Settings',()=>{

    //  Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<DeliverySettings />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    //  Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<DeliverySettings />);  
      component.render();
    });

    //  Function testing 
    test('function testing',()=>{
      const component = shallow(<DeliverySettings />);
      const wrapper = new DeliverySettings;
      component.render();
      wrapper.setModalVisible(false);
      wrapper.setResendSuccess(false);
      wrapper.setResendCode('text');
      wrapper.validateInputData();
      wrapper.switchOnOffStateUpdates('view',true);
      wrapper.setReadMoreStateUpdates('view');
      wrapper.setPreferenceUpdates('view');
   });

});