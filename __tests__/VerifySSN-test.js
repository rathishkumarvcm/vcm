import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import VerifySSN from '../App/Screens/VerifySSN/VerifySSNComponent';
// import GButtonComponent from '../App/CommonComponents/GButtonComponent';
// import { GInputComponent } from '../App/CommonComponents';

describe('Verify SSN ',()=>{

  // Snap shot 
  it('snap shot', () => {  
    const tree = renderer.create(<VerifySSN />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Render using shallow - shallow not includes child component
  test('function testing',()=>{
    const component = shallow(<VerifySSN />);  
    component.render();
  });

  // Function testing
  test('function testing',()=>{
    const component = shallow(<VerifySSN />);
    const wrapper = new VerifySSN();
    component.render();

    wrapper.onClickNext();
 });

 // Input Component 
it('Input Text',()=>{
    const instanceOf = renderer.create(<VerifySSN />).getInstance();
    instanceOf.setSocialSecurityNumber('123456789');
    expect(instanceOf.state.socialSecurityNumber).toEqual('123456789');
});




});