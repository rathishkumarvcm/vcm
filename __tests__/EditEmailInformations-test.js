import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditEmailInformations from '../App/Screens/EditEmailInformation/EditEmailInfoComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn() };

describe('Edit Email Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditEmailInformations navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render', () => {
        const component = shallow(<EditEmailInformations navigation={navigation} />);
        component.render();
    });

    // Application Function Calls
    test('function test', () => {
        const component = shallow(<EditEmailInformations navigation={navigation} />);
        const wrapper = new EditEmailInformations();
        component.render();
        wrapper.renderEmailInformation();
    });
});