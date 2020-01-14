import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditEmploymentInformations from '../App/Screens/EditOccupationInformation/EditOccupationInfoComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Edit Employment Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const props = {};
        const getProfileCompositeData = jest.fn();
        const tree = renderer.create(<EditEmploymentInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render',()=>{
        const props = {};
        const getProfileCompositeData = jest.fn();
        const component = shallow(<EditEmploymentInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);  
        component.render();
      });
});