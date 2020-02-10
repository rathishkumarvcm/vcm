
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PurchaseScreenFourComponent from '../App/Screens/PurchaseScreenFour/PurchaseScreenFourComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('Purchase Screen Four - Review and Confirm', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<PurchaseScreenFourComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<PurchaseScreenFourComponent navigation={navigation} />);
    component.render();
  });

});