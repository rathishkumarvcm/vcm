import { connect } from "react-redux";
import GuestUserDashboardComponent from './GuestUserDashboardComponent';
import { newsAndCommentaryActions, savedItemsActions } from "../../Shared/Actions";

/*----------------------
                                  Redux Methods
                                                             -------------------------- */

const mapStateToProps = (state /* , props */) => (
    {
      newsData: state.newsAndCommentaryData,
      savedItemsData: state.savedItemsData,
    }
  );

const mapDispatchToProps = {
  ...newsAndCommentaryActions,
  ...savedItemsActions
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(GuestUserDashboardComponent);