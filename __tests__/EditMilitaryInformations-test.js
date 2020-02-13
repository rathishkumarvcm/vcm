import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import EditMilitaryInformations from '../App/Screens/EditMilitaryInformation/EditMilitaryInfoComponent';

const navigation = { navigate: jest.fn(), getParam: jest.fn() };
// const props = {};
const getProfileCompositeData = jest.fn();

describe('Edit Military Informations', () => {

  // Application Screnshot
  it('snap shot', () => {
    // const tree = renderer.create(<EditMilitaryInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();
    const tree = renderer.create(<EditMilitaryInformations getProfileCompositeData={getProfileCompositeData} navigation={navigation} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  // Application Render
  test('render', () => {
   // const component = shallow(<EditMilitaryInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
    const component = shallow(<EditMilitaryInformations getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);

    component.render();
  });

  test('function test', () => {
   // const component = shallow(<EditMilitaryInformations {...props} getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
    const component = shallow(<EditMilitaryInformations getProfileCompositeData={getProfileCompositeData} navigation={navigation} />);
    const wrapper = new EditMilitaryInformations();
    component.render();
    wrapper.radioButtonClicked();
    wrapper.dropDownMilitaryOnClick();
    wrapper.dropDownBranchOnClick();
    wrapper.dropDownMarineOnClick();
  });
});