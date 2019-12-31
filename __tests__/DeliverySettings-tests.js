import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import DeliverySettings from '../App/Screens/DeliverySettings/DeliverySettingsComponent';

describe('Delivery Settings',()=>{

    // Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<DeliverySettings />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<DeliverySettings />);  
      component.render();
    });

});