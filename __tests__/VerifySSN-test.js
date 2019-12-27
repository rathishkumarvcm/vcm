/**
  * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import VerifySSN from '../App/Screens/VerifySSN/VerifySSNComponent';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe('Verify SSN ',()=>{

  // Snap shot 
  it('snap shot', () => {  
    const tree = renderer.create(<VerifySSN />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Render using mount - mount includes child component also
  test('function testing',()=>{
    const component = Enzyme.mount(
        <VerifySSN />
    );  
    component.render();
  });

// // Render using mount - expects the case to be true of false
// test('function testing',()=>{
//   const component = Enzyme.mount(
//       <VerifySSN />
//   );
//   const wrapper = new VerifySSN();
//   component.render();
//   expect(wrapper).toBeTruthy();
// });

// // Render using shallow - shallow not includes child component
// test('function testing',()=>{
//   const component = Enzyme.shallow( <VerifySSN /> );
//   const wrapper = new VerifySSN();
//   component.render();
//   expect(wrapper).toBeTruthy();
// });

// // Render using shallow - with props value
// test('function testing',()=>{
//   const props = {};
//   const component = Enzyme.shallow(
//       <VerifySSN {...props}/>
//   );
//   const wrapper = new VerifySSN({...props});
//   component.render();
//   expect(wrapper).toBeTruthy();
// });

// // Input Component 
// it('Input Text',()=>{
//     const instanceOf = renderer.create(<VerifySSN />).getInstance();
//     instanceOf.setSocialSecurityNumber('123456789');
//     expect(instanceOf.state.socialSecurityNumber).toEqual('123456789');
// });

// it("should navigate to the 'QuestionsScreen'", () => { 
//   // const mockFn = jest.fn();

//   // const tree = shallow(
//   //   <GButtonComponent onClickNext={mockFn} />
//   // );
//   // tree.simulate('click');
//   // expect(mockFn).toHaveBeenCalled();

//   const wrapper = shallow(<VerifySSN />);
//   wrapper.find(GButtonComponent).props().onPress({});

//   expect(props.navigation.navigate).toHaveBeenCalledTimes(1);   // SUCCESS
// });

});