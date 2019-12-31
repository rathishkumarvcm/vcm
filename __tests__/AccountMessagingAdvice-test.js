import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AccountMessagingAdvice from '../App/Screens/AccountMessagingAdvice/AccountMessagingAdviceComponent';

describe('Account Messaging Advice',()=>{

    // Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<AccountMessagingAdvice />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<AccountMessagingAdvice />);  
      component.render();
    });

});