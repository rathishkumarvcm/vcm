
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PurchaseScreenOneComponent from '../App/Screens/PurchaseScreenOne/PurchaseScreenOneComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('Purchase Screen One - Account Selection', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<PurchaseScreenOneComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<PurchaseScreenOneComponent navigation={navigation} />);
    component.render();
  });

});