import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import EditAddContactInformations from '../App/Screens/EditAddressAddNew/EditAddressAddNewComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Add Contact Information', () => {

    // Application Screnshot
    it('snap shot', () => {
        const tree = renderer.create(<EditAddContactInformations navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Application Render
    test('render',()=>{
        const component = shallow(<EditAddContactInformations navigation={navigation} />);  
        component.render();
      });
});