
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VerifyIntrestedPartiesComponent from '../App/Screens/VerifyIntrestedParties/VerifyIntrestedPartiesComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('Verify Interested Parties', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<VerifyIntrestedPartiesComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<VerifyIntrestedPartiesComponent navigation={navigation} />);
    component.render();
  });

});