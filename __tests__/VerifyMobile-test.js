import React from 'react';
import renderer from 'react-test-renderer';
import VerifyMobile from '../App/Screens/VerifyMobile/VerifyMobileComponent';
// import {shallow} from 'enzyme';

// Snap shot
it('Match Snapshot', () => {  
  const tree = renderer.create(<VerifyMobile />).toJSON();
  expect(tree).toMatchSnapshot();
});

// // Instead of render method using at each time
// let wrapper;
// beforeEach(() => {
//   wrapper = shallow(<VerifyMobile />);
// });

// describe('<Verify Mobile />', () => {
//   it('should match Snapshot', () => {
//       expect(wrapper).toMatchSnapshot();
//   });
// });