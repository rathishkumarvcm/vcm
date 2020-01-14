import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditAddPhoneInformations from '../App/Screens/EditAddNewPhoneNumber/EditAddPhoneNumberComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

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
});