import { connect } from 'react-redux';

import { selectItem } from '../reducers/game';
import GameItem from '../components/GameItem';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onClick: (item) => {
    dispatch(selectItem(item));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GameItem);
