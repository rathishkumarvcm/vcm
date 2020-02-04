import { connect } from "react-redux";
import GuestUserDashboardComponent from './GuestUserDashboardComponent';
import { newsAndCommentaryActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
      newsData: state.newsAndCommentaryData
    }
  );

const mapDispatchToProps = {
  ...newsAndCommentaryActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GuestUserDashboardComponent);