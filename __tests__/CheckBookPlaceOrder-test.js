/**
  * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import CheckBookPlaceOrder from '../App/Screens/CheckBookPlaceOrder/CheckBookPlaceOrderComponent';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn(), getParam: jest.fn() }

describe('Bank Accounts ', () => {

    // Snap shot 
    it('snap shot', () => {
        const tree = renderer.create(<CheckBookPlaceOrder navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Render using mount - mount includes child component also
    test('function testing', () => {
        const component = Enzyme.mount(
            <CheckBookPlaceOrder navigation={navigation}  />
        );
        component.render();
    });
});