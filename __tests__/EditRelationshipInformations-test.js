import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditRelationshipInformations from '../App/Screens/EditRelationshipInformation/EditRelationshipComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Edit Relationship Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const props = {};
        const getProfileCompositeData = jest.fn();
        const tree = renderer.create(<EditRelationshipInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render',()=>{
        const props = {};
        const getProfileCompositeData = jest.fn();
        const component = shallow(<EditRelationshipInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);  
        component.render();
      });
});