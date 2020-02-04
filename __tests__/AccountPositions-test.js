import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AccountPositions from '../App/Screens/AccountPositions/AccountPositionsComponent';

describe('Account Positions',()=>{

    //  Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<AccountPositions />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    //  Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<AccountPositions />);  
      component.render();
    });

    //  Function testing 
    test('function testing',()=>{
      const component = shallow(<AccountPositions />);
      const wrapper = new AccountPositions;
      component.render();
      wrapper.setExpandVisible('index');      
   });

});