
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditManageBeneficiariesComponent from '../App/Screens/EditManageBeneficiaries/EditManageBeneficiariesComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('Edit Beneficiaries', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<EditManageBeneficiariesComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<EditManageBeneficiariesComponent navigation={navigation} />);
    component.render();
  });

});