
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VerifyManageBeneficiariesComponent from '../App/Screens/VerifyManageBeneficiaries/VerifyManageBeneficiariesComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('List of Beneficiaries', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<VerifyManageBeneficiariesComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<VerifyManageBeneficiariesComponent navigation={navigation} />);
    component.render();
  });

});