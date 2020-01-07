import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AccountMessagingSecurityAndFraud from '../App/Screens/AccountMessagingSecurityAndFraud/AccountMessagingSecurityAndFraudComponent';

describe('Account Messaging Security and Fraud',()=>{

    //  Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<AccountMessagingSecurityAndFraud />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    //  Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<AccountMessagingSecurityAndFraud />);  
      component.render();
    });

});