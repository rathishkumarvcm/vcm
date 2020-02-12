/**
  * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import BankAccounts from '../App/Screens/BankAccounts/BankAccountsComponent';



Enzyme.configure({ adapter: new Adapter() });

/*
const testProps = props => ({

    navigation: { navigate: jest.fn(), getParam: jest.fn() },
    getBankAccountInfo: jest.fn(),
    ...props,
});

*/

const navigation = { navigate: jest.fn(), getParam: jest.fn(), getBankAccountInfo: jest.fn()};

const getBankAccountInfo = jest.fn();


describe('Bank Accounts ', () => {

    // Snap shot 
    it('snap shot', () => {
        const tree = renderer.create(<BankAccounts navigation={navigation} getBankAccountInfo={getBankAccountInfo} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Render using mount - mount includes child component also
    test('function testing', () => {
        const component = Enzyme.mount(
            <BankAccounts navigation={navigation} getBankAccountInfo={getBankAccountInfo} />
        );
        component.render();
    });
});