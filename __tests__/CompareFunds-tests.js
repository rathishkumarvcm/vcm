import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import CompareFunds from '../App/Screens/CompareFunds/CompareFundsComponent';

describe('Compare Funds',()=>{

    //  Render using shallow - shallow not includes child component
    test('Match Snapshot',()=>{
        const props = {};
        const getFundDetailsData = jest.fn();
        const component = shallow(<CompareFunds {...props} getFundDetailsData={getFundDetailsData}/>);  
        component.render();
        expect(component).toMatchSnapshot();
    });

});