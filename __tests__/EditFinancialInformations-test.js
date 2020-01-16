import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditFinancialInformations from '../App/Screens/EditAddFinancialInformation/EditAddFinancialInfoComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn() };
const props = {};
const getProfileCompositeData = jest.fn();

describe('Edit Financial Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditFinancialInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render', () => {
        const component = shallow(<EditFinancialInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        component.render();
    });

    // Application Function Calls
    test('function test', () => {
        const component = shallow(<EditFinancialInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        const wrapper = new EditFinancialInformations();
        component.render();
        wrapper.dropDownFinancialClick();
    });
});