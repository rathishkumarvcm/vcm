
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditManageIntrestedPartiesComponent from '../App/Screens/EditManageIntrestedParties/EditManageIntrestedPartiesComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('Edit Intrested Parties', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<EditManageIntrestedPartiesComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<EditManageIntrestedPartiesComponent navigation={navigation} />);
    component.render();
  });

});