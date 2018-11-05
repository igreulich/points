import React from 'react';
import PropTypes from 'prop-types';

import { Card } from 'semantic-ui-react';

class GameItem extends React.Component {
  handleClick = () => {
    const { item, onClick } = this.props;

    onClick(item);
  };

  render() {
    const { item } = this.props;

    return (
      <Card
        image={`https://via.placeholder.com/150?text=${item ? item.name : ''}`}
        color="green"
        onClick={this.handleClick}
      />
    );
  }
}

GameItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    points: PropTypes.number,
    bonusQty: PropTypes.number,
    bonus: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GameItem;
