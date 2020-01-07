import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AccountMessagingSettings from '../App/Screens/AccountMessagingSettings/AccountMessagingSettingsComponent';

describe('Account Messaging Settings',()=>{

    //  Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<AccountMessagingSettings />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    //  Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<AccountMessagingSettings />);  
      component.render();
    });

});