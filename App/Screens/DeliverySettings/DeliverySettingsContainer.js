import { connect } from "react-redux";
import DeliverySettingsComponent from './DeliverySettingsComponent';

const mapStateToProps = (state /* , props */) => (
    {     
      initialState :state.initialAppData
    }
  );

const mapDispatchToProps = { 
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(DeliverySettingsComponent);