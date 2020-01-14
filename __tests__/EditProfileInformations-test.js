import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditProfileInformations from '../App/Screens/EditProfileSettings/EditProfileSettingsComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Edit Profile Settings', () => {

    // Application Screnshot
    it('snap shot', () => {
        const props = {};
        const getProfileCompositeData = jest.fn();
        const tree = renderer.create(<EditProfileInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('render',()=>{
        const props = {};
        const getProfileCompositeData = jest.fn();
        const component = shallow(<EditProfileInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);  
        component.render();
      });
});