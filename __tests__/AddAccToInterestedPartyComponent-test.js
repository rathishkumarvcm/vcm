
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AddAccToInterestedPartyComponent from '../App/Screens/AddAccToInterestedParty/AddAccToInterestedPartyComponent';

Enzyme.configure({ adapter: new Adapter() });

const navigation = { navigate: jest.fn() };

describe('Add Account To Interested Parties', () => {

  // Snap shot 
  it('snap shot', () => {
    const tree = renderer.create(<AddAccToInterestedPartyComponent navigation={navigation} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
    const component = shallow(<AddAccToInterestedPartyComponent navigation={navigation} />);
    component.render();
  });

});