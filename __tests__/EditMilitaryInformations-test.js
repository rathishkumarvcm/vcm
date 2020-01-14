import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditMilitaryInformations from '../App/Screens/EditMilitaryInformation/EditMilitaryInfoComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Edit Military Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const props = {};
        const getProfileCompositeData = jest.fn();
        const tree = renderer.create(<EditMilitaryInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render',()=>{
        const props = {};
        const getProfileCompositeData = jest.fn();
        const component = shallow(<EditMilitaryInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);  
        component.render();
      });
});