
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PurchaseScreenTwoComponent from '../App/Screens/PurchaseScreenTwo/PurchaseScreenTwoComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('Purchase Screen Two - Investment Selection', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<PurchaseScreenTwoComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<PurchaseScreenTwoComponent navigation={navigation} />);
    component.render();
  });

  // Function testing 
  test('function testing', () => {
    const component = shallow(<PurchaseScreenTwoComponent />);
    const wrapper = new PurchaseScreenTwoComponent;
    component.render();
    wrapper.setModalVisible(true);
    wrapper.onPressRemoveInvestment();
    wrapper.onChangeTextForInvestment("initialInvestment");
    wrapper.onChangeIndex();
  });

});