import { connect } from 'react-redux';

import { resetGame } from '../reducers/game';
import InfoSection from '../components/InfoSection';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  handleResetGame: () => {
    dispatch(resetGame());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InfoSection);
