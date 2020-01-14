import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditAddRelationInformations from '../App/Screens/EditFamilyMemberInformation/EditFamilyMemberComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Add Relationship Information', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditAddRelationInformations navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render',()=>{
        const component = shallow(<EditAddRelationInformations navigation={navigation} />);  
        component.render();
      });
});