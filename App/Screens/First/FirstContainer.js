import { connect } from "react-redux";
import FirstComponent from './FirstComponent';



const mapStateToProps = (state /* , props */) => (
    {
     //  homeData: getHome(state)
    }
  );

const mapDispatchToProps = {
  //   ...homeActions
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(FirstComponent);



/*First Way To update Store:(mapDispatchToProps)

Component -> Actions -> Reducer -> Store


To Retrieve From Store:(mapStateToProps)


Store -> component*/

