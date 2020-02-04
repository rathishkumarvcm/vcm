import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AccountMessagingInvestmentAccount from '../App/Screens/AccountMessagingInvestmentAccount/AccountMessagingInvestmentAccountComponent';

describe('Account Positions',()=>{

    //  Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<AccountMessagingInvestmentAccount />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    //  Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<AccountMessagingInvestmentAccount />);  
      component.render();
    });

    //  Function testing 
    test('function testing',()=>{
      const component = shallow(<AccountMessagingInvestmentAccount />);
      const wrapper = new AccountMessagingInvestmentAccount;
      component.render();
      wrapper.setExpandVisible('index');      
   });

});