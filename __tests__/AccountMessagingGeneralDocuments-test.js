import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import AccountMessagingGeneralDocuments from '../App/Screens/AccountMessagingGeneralDocuments/AccountMessagingGeneralDocumentsComponent';

describe('Account Messaging General Documents',()=>{

    //  Snap shot 
    it('Match Snapshot', () => {  
      const tree = renderer.create(<AccountMessagingGeneralDocuments />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  
    //  Render using shallow - shallow not includes child component
    test('render',()=>{
      const component = shallow(<AccountMessagingGeneralDocuments />);  
      component.render();
    });

    //  Function testing 
  //   test('function testing',()=>{
  //     const component = shallow(<AccountMessagingGeneralDocuments />);
  //     const wrapper = new AccountMessagingGeneralDocuments;
  //     component.render();
  //     wrapper.onPrefernceSelected('type','item','selected');
  //     wrapper.onDocumentsSelected('type','item','selected');     
  //     wrapper.onSelectedConfirm('item');
  //     wrapper.toggleSwitch('value');
  //     wrapper.setInputRef('input');
  //     wrapper.setApplyState();
  //     wrapper.onChangeText('state','keyname');
  //     wrapper.onSubmitEditing('input');
  //     wrapper.onSubmitZipEditing('state','keyname','focus');      
  //  });

});