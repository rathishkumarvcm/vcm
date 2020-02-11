
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PurchaseScreenThreeComponent from '../App/Screens/PurchaseScreenThree/PurchaseScreenThreeComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('Purchase Screen Three - Fund Source', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<PurchaseScreenThreeComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<PurchaseScreenThreeComponent navigation={navigation} />);
    component.render();
  });

  test('function testing', () => {
    const component = shallow(<PurchaseScreenThreeComponent />);
    const wrapper = new PurchaseScreenThreeComponent;
    component.render();
    wrapper.onSelectBankAccount();
    wrapper.switchMethod();
    wrapper.onClickCheckOrderSelected();
    wrapper.onClickWireTransferSelected();
  });

});