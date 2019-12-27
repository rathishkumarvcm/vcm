/**
  * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import VerifyMobile from '../App/Screens/VerifyMobile/VerifyMobileComponent';
import renderer from 'react-test-renderer';
import {mount,configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

let wrapper;
beforeEach(() => {
  wrapper = mount(<VerifyMobile/>);
});

describe('<Verify Mobile />', () => {
  it('should match Snapshot', () => {
      expect(wrapper).toMatchSnapshot();
  });
});

// //Snap shot
// it('renders correctly', () => {  
//   const tree = renderer.create(<VerifyMobile />).toJSON();
//   expect(tree).toMatchSnapshot();
// });