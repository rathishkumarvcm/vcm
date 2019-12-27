/**
  * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import VerifySSN from '../App/Screens/VerifySSN/VerifySSNComponent';
import renderer from 'react-test-renderer';
import {Enzyme,mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//Enzyme.configure({ adapter: new Adapter() });
configure({ adapter: new Adapter() });

// Snap shot
// it('renders correctly', () => {  
//   const tree = renderer.create(<VerifySSN />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// // Screen Render 
// test('function testing',()=>{
//   const component = Enzyme.shallow( <VerifySSN /> );
//   const wrapper = new VerifySSN();
//   component.render();
//   expect(wrapper).toBeTruthy();
// });

// test('function testing',()=>{
//   const component = Enzyme.mount(
//       <VerifySSN />
//   );  
//   component.render();
// });

// test('function testing',()=>{
//   const component = Enzyme.mount(
//       <VerifySSN />
//   );
//   const wrapper = new VerifySSN();
//   component.render();
//   expect(wrapper).toBeTruthy();
// });

// test('function testing',()=>{
//   const props = {};
//   const component = Enzyme.shallow(
//       <VerifySSN {...props}/>
//   );
//   const wrapper = new VerifySSN({...props});
//   component.render();
//   expect(wrapper).toBeTruthy();
// });

// Input Component 
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

