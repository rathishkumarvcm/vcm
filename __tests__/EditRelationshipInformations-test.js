import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditRelationshipInformations from '../App/Screens/EditRelationshipInformation/EditRelationshipComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn() };
const props = {};
const getProfileCompositeData = jest.fn();

describe('Edit Relationship Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditRelationshipInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render 
    test('render', () => {
        const component = shallow(<EditRelationshipInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        component.render();
    });

    // Application Function Calls 
    test('function test', () => {
        const component = shallow(<EditRelationshipInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        const wrapper = new EditRelationshipInformations();
        component.render();
        wrapper.dropDownRelationOnClick();
    });
});