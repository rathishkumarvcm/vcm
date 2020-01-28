import { connect } from 'react-redux';
import AccountMessagingGeneralDocumentsComponent from './AccountMessagingGeneralDocumentsComponent';
import { accMessagingDocumentsActions,addressFormatActions } from "../../Shared/Actions";


/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => ({  
  accMessageDocumentinitialState: state.accMessagingDocumentsData,  
  addressFormatData:state.addressFormatData,
  initialState :state.initialAppData,
});

const mapDispatchToProps = {
  ...accMessagingDocumentsActions,
  ...addressFormatActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountMessagingGeneralDocumentsComponent);
