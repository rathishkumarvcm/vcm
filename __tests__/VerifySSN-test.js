import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import VerifySSN from '../App/Screens/VerifySSN/VerifySSNComponent';

describe('Verify SSN ',()=>{

  // Snap shot 
  it('snap shot', () => {  
    const tree = renderer.create(<VerifySSN />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Render using mount - mount includes child component also
  test('function testing',()=>{
    const component = shallow(<VerifySSN />);  
    component.render();
  });

  test('function testing',()=>{
    const component = shallow(<VerifySSN />);
    const wrapper = new VerifySSN();
    component.render();

    wrapper.onClickNext();
 });

});