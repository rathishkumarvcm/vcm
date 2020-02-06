
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ManageIntrestedPartiesComponent from '../App/Screens/ManageIntrestedParties/ManageIntrestedPartiesComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('List of Interested Parties', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<ManageIntrestedPartiesComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<ManageIntrestedPartiesComponent navigation={navigation} />);
    component.render();
  });

});