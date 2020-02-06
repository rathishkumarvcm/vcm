import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Amend from '../App/Screens/TAmmend/TAmmendComponent';


describe('Transactions Ammend ',()=>{

    // Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<Amend />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<Amend />);  
      component.render();
    });
 // Function testing 
  /* test('function testing',()=>{
    const component = shallow(<Amend />);
    const wrapper = new Amend;
    component.render();
    wrapper.selectTheQuestion();
    wrapper.selectTheQuestion2();
    wrapper.selectTheQuestion3();
 });  */
});

// mocked function call on button click
/* it('Called function on button click', () => {       
    const wrapper = shallow(<VerifyMobile onPress={jest.fn()} />)
    const spy = jest.spyOn(wrapper.instance(), 'onClickNext');
    wrapper.instance().forceUpdate();
    wrapper.find(GButtonComponent).at(2).simulate('press');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();  
  }); */