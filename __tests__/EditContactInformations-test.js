import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditContactInformations from '../App/Screens/EditAddressInformation/EditAddressInfoComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Edit Contact Informations', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditContactInformations navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render',()=>{
        const component = shallow(<EditContactInformations navigation={navigation} />);  
        component.render();
      });
});