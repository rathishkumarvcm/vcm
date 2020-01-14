import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ProfileSettings from '../App/Screens/ProfileSettings/ProfileSettingsComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Profile Settings', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<ProfileSettings navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render',()=>{
        const component = shallow(<ProfileSettings navigation={navigation} />);  
        component.render();
      });
});