import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import QuickSignIn from '../App/Screens/QuickSignIn/QuickSignInComponent';
import { GButtonComponent } from '../App/CommonComponents';


describe('Quick Sign In ',()=>{

    // Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<QuickSignIn />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<QuickSignIn />);  
      component.render();
    });
 // Function testing 
  /* test('function testing',()=>{
    const component = shallow(<QuickSignIn />);
    const wrapper = new QuickSignIn;
    component.render();
    wrapper.selectTheQuestion();
    wrapper.selectTheQuestion2();
    wrapper.selectTheQuestion3();
 });  */
});

// mocked function call on button click
 it('Called function on button click', () => {       
    const wrapper = shallow(<QuickSignIn onPress={jest.fn()} />);
    const spy = jest.spyOn(wrapper.instance(), 'onClickNext');
    wrapper.instance().forceUpdate();
    wrapper.find(GButtonComponent).at(2).simulate('press');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();  
  }); 