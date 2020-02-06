import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import ModifySecurityQuesComponent from '../App/Screens/ModifySecurityQues/ModifySecurityQuesComponent';
import { GButtonComponent } from '../App/CommonComponents';


describe('Modify Security Questions',()=>{

    // Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<ModifySecurityQuesComponent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    // Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<ModifySecurityQuesComponent />);  
      component.render();
    });
 // Function testing 
  test('function testing',()=>{
    const component = shallow(<ModifySecurityQuesComponent />);
    const wrapper = new ModifySecurityQuesComponent;
    component.render();
    wrapper.selectedDropDownValue('text');
    wrapper.selectedDropDownValue2('text');
    wrapper.selectedDropDownValue3('text');
    wrapper.validateFields();
 }); 
});

// Questions Matches  
it('Question1 and 2 Matches ', () => {
    const instanceOf = renderer.create(<ModifySecurityQuesComponent />).getInstance();
    instanceOf.selectedDropDownValue('Please Enter Same Question');  
    instanceOf.selectedDropDownValue2('Please Enter Same Question');  
    expect(instanceOf.state.question1).toEqual(instanceOf.state.question2);
  });
  it('Question2 and 3 Matches ', () => {
    const instanceOf = renderer.create(<ModifySecurityQuesComponent />).getInstance();
    instanceOf.selectedDropDownValue2('Please Enter Same Question');  
    instanceOf.selectedDropDownValue3('Please Enter Same Question');  
    expect(instanceOf.state.question2).toEqual(instanceOf.state.question3);
  });
  it('Question3 and 1 Matches ', () => {
    const instanceOf = renderer.create(<ModifySecurityQuesComponent />).getInstance();
    instanceOf.selectedDropDownValue3('Please Enter Same Question');  
    instanceOf.selectedDropDownValue('Please Enter Same Question');  
    expect(instanceOf.state.question3).toEqual(instanceOf.state.question1);
  });

  // mocked function call on button click
it('Called function on button click', () => {       
    const wrapper = shallow(<ModifySecurityQuesComponent onPress={jest.fn()} />);
    const spy = jest.spyOn(wrapper.instance(), 'validateFields');
    wrapper.instance().forceUpdate();
    wrapper.find(GButtonComponent).at(2).simulate('press');
    expect(spy).toHaveBeenCalled();
    spy.mockClear();  
  });

