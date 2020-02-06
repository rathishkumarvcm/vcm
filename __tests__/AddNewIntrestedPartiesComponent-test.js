
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddNewIntrestedPartiesComponent from '../App/Screens/AddNewIntrestedParties/AddNewIntrestedPartiesComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('Add New Interested Parties', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<AddNewIntrestedPartiesComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<AddNewIntrestedPartiesComponent navigation={navigation} />);
    component.render();
  });

});