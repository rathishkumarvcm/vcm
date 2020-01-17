import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditAddContactInformations from '../App/Screens/EditAddressAddNew/EditAddressAddNewComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn() };
const props = {};
const getAddressFormat = jest.fn();

describe('Add Contact Information', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditAddContactInformations navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render', () => {
        const component = shallow(<EditAddContactInformations navigation={navigation} />);
        component.render();
    });

    // Application Function Calls
    test('function test', () => {
        const component = shallow(<EditAddContactInformations {...props} getAddressFormat={getAddressFormat} navigation={navigation} />);
        const wrapper = new EditAddContactInformations();
        component.render();
        wrapper.radioButtonClicked();
    });

    it('Input text matches with length', () => {
        const instanceOf = renderer.create(<EditAddContactInformations {...props} navigation={navigation} />).getInstance();
        instanceOf.setAddressOne('text');
        expect(instanceOf.state.addressOne).toHaveLength(4);
    });
});