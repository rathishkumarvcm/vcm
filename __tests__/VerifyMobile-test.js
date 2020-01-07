import React from 'react';
import renderer from 'react-test-renderer';
import VerifyMobile from '../App/Screens/VerifyMobile/VerifyMobileComponent';
import {shallow} from 'enzyme';
import { GButtonComponent } from '../App/CommonComponents';

//  Snap shot
it('Match Snapshot', () => {  
  const tree = renderer.create(<VerifyMobile />).toJSON();
  expect(tree).toMatchSnapshot();
});

//  Function testing 
test('function testing',()=>{
  const component = shallow(<VerifyMobile />);
  const wrapper = new VerifyMobile;
  component.render();
  wrapper.isEmpty('text');
  wrapper.setMobileNumber('mobilenumber');
  wrapper.onClickNext();
});

//  Input Component matches the length 
it('Input text matches with length', () => {
  const instanceOf = renderer.create(<VerifyMobile />).getInstance();
  instanceOf.setMobileNumber('12345678900');  
  expect(instanceOf.state.mobileNumber).toHaveLength(11);
});

 //  Input Component matches with given input
it('Input text matches with given input',()=>{
  const instanceOf = renderer.create(<VerifyMobile />).getInstance();
  instanceOf.setMobileNumber('12345678900');  
  expect(instanceOf.state.mobileNumber).toEqual('12345678900');
});

//  mocked function call on button click
it('Called function on button click', () => {       
  const wrapper = shallow(<VerifyMobile onPress={jest.fn()} />)
  const spy = jest.spyOn(wrapper.instance(), 'onClickNext');
  wrapper.instance().forceUpdate();
  wrapper.find(GButtonComponent).at(2).simulate('press');
  expect(spy).toHaveBeenCalled();
  spy.mockClear();  
});

//  //  Instead of render method using at each time
//  let wrapper;
//  beforeEach(() => {
//    wrapper = shallow(<VerifyMobile />);
//  });

//  describe('<Verify Mobile />', () => {
//    it('should match Snapshot', () => {
//        expect(wrapper).toMatchSnapshot();
//    });
//  });