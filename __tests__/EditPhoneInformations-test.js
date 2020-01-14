import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditPhoneInformations from '../App/Screens/EditPhoneInformations/EditPhoneInfoComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Edit Phone Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditPhoneInformations navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render',()=>{
        const component = shallow(<EditPhoneInformations navigation={navigation} />);  
        component.render();
      });
});