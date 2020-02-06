
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddNewBeneficiaryComponent from '../App/Screens/AddNewBeneficiary/AddNewBeneficiaryComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('List of Beneficiaries', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<AddNewBeneficiaryComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<AddNewBeneficiaryComponent navigation={navigation} />);
    component.render();
  });

});