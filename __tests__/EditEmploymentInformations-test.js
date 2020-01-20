import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditEmploymentInformations from '../App/Screens/EditOccupationInformation/EditOccupationInfoComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn() };
const props = {};
const getProfileCompositeData = jest.fn();

describe('Edit Employment Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditEmploymentInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render', () => {
        const component = shallow(<EditEmploymentInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        component.render();
    });

    test('function test', () => {
        const component = shallow(<EditEmploymentInformations getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        const wrapper = new EditEmploymentInformations();
        component.render();
        wrapper.dropDownOccupationClick();
        wrapper.dropDownSourceClick();
        wrapper.dropDownIndustryClick();
    });
});