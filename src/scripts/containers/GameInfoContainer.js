import { connect } from 'react-redux';

import { resetGame } from '../reducers/game';
import GameInfo from '../components/GameInfo';

const mapStateToProps = ({ game }) => ({
  selectedItems: game.selectedItems,
});

const mapDispatchToProps = dispatch => ({
  handleResetGame: () => {
    dispatch(resetGame());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameInfo);
