import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditRelationDetailInformations from '../App/Screens/EditFamilyMemberDetails/EditFamilyDetailComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn() };
const props = {};
const getProfileCompositeData = jest.fn();

describe('Relationship Detail Information', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditRelationDetailInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render', () => {
        const component = shallow(<EditRelationDetailInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        component.render();
    });

    // Application Function Calls
    test('function test', () => {
        const component = shallow(<EditRelationDetailInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        const wrapper = new EditRelationDetailInformations();
        component.render();
        wrapper.dropDownOnClick();
    });
});