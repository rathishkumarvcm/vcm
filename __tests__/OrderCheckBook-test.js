/**
  * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrderCheckBook from '../App/Screens/OrderCheckBook/CheckBookComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn(), getParam: jest.fn() };

const getCheckBookInfo = jest.fn();

describe('Bank Accounts ', () => {

    // Snap shot 
    it('snap shot', () => {
        const tree = renderer.create(<OrderCheckBook navigation={navigation} getCheckBookInfo={getCheckBookInfo} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Render using mount - mount includes child component also
    test('function testing', () => {
        const component = Enzyme.mount(
            <OrderCheckBook navigation={navigation} getCheckBookInfo={getCheckBookInfo} />
        );
        component.render();
    });
});