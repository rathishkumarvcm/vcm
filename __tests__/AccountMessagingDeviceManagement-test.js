import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AccountMessagingDeviceManagement from '../App/Screens/AccountMessagingDeviceManagement/AccountMessagingDeviceManagementComponent';

describe('Account Messaging Device Management',()=>{

    // Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<AccountMessagingDeviceManagement />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<AccountMessagingDeviceManagement />);  
      component.render();
    });

});