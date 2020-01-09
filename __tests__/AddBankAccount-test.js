/**
  * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddBankAccount from '../App/Screens/AddBankAccount/AddBankAccountComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn()};

describe('Bank Accounts ', () => {

    // Snap shot 
    it('snap shot', () => {
        const tree = renderer.create(<AddBankAccount navigation={navigation} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Render using mount - mount includes child component also
    test('function testing', () => {
        const component = Enzyme.mount(
            <AddBankAccount navigation={navigation} />
        );
        component.render();
    });
});