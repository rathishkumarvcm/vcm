import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditAddPhoneInformations from '../App/Screens/EditAddNewPhoneNumber/EditAddPhoneNumberComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};
const props = {};

describe('Add Phone Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditAddPhoneInformations navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render',()=>{
        const component = shallow(<EditAddPhoneInformations navigation={navigation} />);  
        component.render();
      });

      // Application Function Calls
      test('function test', () => {
          const component = shallow(<EditAddPhoneInformations {...props} navigation={navigation} />);
          const wrapper = new EditAddPhoneInformations();
          component.render();
          wrapper.dropDownPhoneClick();
      });

      it('Input text matches with length', () => {
        const instanceOf = renderer.create(<EditAddPhoneInformations {...props} navigation={navigation} />).getInstance();
        instanceOf.setContactNumber('1234567890');
        expect(instanceOf.state.contactNumber).toHaveLength(10);
    });
});