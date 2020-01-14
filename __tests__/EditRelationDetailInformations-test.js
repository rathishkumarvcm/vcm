import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditRelationDetailInformations from '../App/Screens/EditFamilyMemberDetails/EditFamilyDetailComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Relationship Detail Information', () => {

    // Application Screnshot
    it('snap shot', () => {
        const props = {};
        const getProfileCompositeData = jest.fn();
        const tree = renderer.create(<EditRelationDetailInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render',()=>{
        const props = {};
        const getProfileCompositeData = jest.fn();
        const component = shallow(<EditRelationDetailInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);  
        component.render();
      });
});