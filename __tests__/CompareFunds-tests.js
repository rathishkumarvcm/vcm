import React from 'react';
import {shallow} from 'enzyme';
import CompareFunds from '../App/Screens/CompareFunds/CompareFundsComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn()};

describe('Compare Funds',()=>{

    //  Render using shallow - shallow not includes child component
    test('Match Snapshot',()=>{
        const props = {};
        const getFundDetailsData = jest.fn();
        const component = shallow(<CompareFunds {...props} getFundDetailsData={getFundDetailsData} navigation={navigation} />);  
        component.render();
        expect(component).toMatchSnapshot();
    });

});