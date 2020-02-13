import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditProfileInformations from '../App/Screens/EditProfileSettings/EditProfileSettingsComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn() };
// const props = {};
const getProfileCompositeData = jest.fn();

describe('Edit Profile Settings', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditProfileInformations getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
       // const tree = renderer.create(<EditProfileInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render', () => {
        const component = shallow(<EditProfileInformations getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        // const component = shallow(<EditProfileInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);

        component.render();
    });

    // Application Function Calls
    test('function test', () => {
        const component = shallow(<EditProfileInformations getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
        // const component = shallow(<EditProfileInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);

        const wrapper = new EditProfileInformations();
        component.render();
        wrapper.radioButtonClicked(1);
        wrapper.navigationSuccess();
        wrapper.dropDownOnClick();
        wrapper.dropDownSuffixClick();
        wrapper.dropDownGenderClick();
        wrapper.dropDownStatusClick();
    });
});