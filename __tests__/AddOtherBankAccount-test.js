/**
  * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddOtherBankAccount from '../App/Screens/AddOtherBankAccount/AddOtherBankAccountComponent';

Enzyme.configure({ adapter: new Adapter() });

describe('Bank Accounts ', () => {

    // Snap shot 
    it('snap shot', () => {
        const tree = renderer.create(<AddOtherBankAccount />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Render using mount - mount includes child component also
    test('function testing', () => {
        const component = Enzyme.mount(
            <AddOtherBankAccount />
        );
        component.render();
    });
});