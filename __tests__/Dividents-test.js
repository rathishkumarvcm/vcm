/**
  * @jest-environment jsdom
*/
import 'react-native';
import React from 'react';
import Dividents from '../App/Screens/Dividents/DividentsAndCapitalGainsPrefComponent';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn(), addListener: jest.fn() }

const getDividentsInfo = jest.fn();

describe('Bank Accounts ', () => {

    // Snap shot 
    it('snap shot', () => {
        const tree = renderer.create(<Dividents navigation={navigation} getDividentsInfo={getDividentsInfo}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // Render using mount - mount includes child component also
    test('function testing', () => {
        const component = Enzyme.mount(
            <Dividents navigation={navigation} getDividentsInfo={getDividentsInfo}/>
        );
        component.render();
    });
});