import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AccountMessagingGoals from '../App/Screens/AccountMessagingGoals/AccountMessagingGoalsComponent';

describe('Account Messaging Goals',()=>{

    // Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<AccountMessagingGoals />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<AccountMessagingGoals />);  
      component.render();
    });

});