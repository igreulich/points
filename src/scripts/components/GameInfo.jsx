import React from 'react';
import PropTypes from 'prop-types';

import CollectionSection from './CollectionSection';
import InfoSection from './InfoSection';

const scoreCalc = (item, numberOfItems) => {
  let full = 0;
  let bonus = 0;
  let score = 0;

  if (item.bonusQty) {
    full = Math.floor(numberOfItems / item.bonusQty) * item.bonus;
    bonus = (numberOfItems % item.bonusQty) * item.points;

    score = full + bonus;
  } else {
    score = item.points * numberOfItems;
  }

  return { score, bonus: score - numberOfItems * item.points };
};

class GameInfo extends React.Component {
  static propTypes = {
    handleResetGame: PropTypes.func,
    selectedItems: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        points: PropTypes.number,
        bonusQty: PropTypes.number,
        bonus: PropTypes.number,
      }).isRequired,
    ),
  };

  static defaultProps = {
    handleResetGame: () => {},
    selectedItems: [],
  };

  createRows = () => {
    const { selectedItems } = this.props;
    const counts = {};

    selectedItems.forEach((item) => {
      if (counts[item.name] && counts[item.name].length) {
        counts[item.name].push(item);
      } else {
        counts[item.name] = [item];
      }
    });

    const rows = Object.entries(counts);

    return rows.map((row) => {
      const totals = scoreCalc(row[1][0], row[1].length);

      return {
        item: row[0],
        qty: row[1].length,
        score: totals.score,
        bonus: totals.bonus,
      };
    });
  };

  render() {
    const { selectedItems, handleResetGame } = this.props;

    const createRows = (items) => {
      const counts = {};

      items.forEach((item) => {
        if (counts[item.name] && counts[item.name].length) {
          counts[item.name].push(item);
        } else {
          counts[item.name] = [item];
        }
      });

      const rows = Object.entries(counts);

      return rows.map((row) => {
        const totals = scoreCalc(row[1][0], row[1].length);

        return {
          item: row[0],
          qty: row[1].length,
          score: totals.score,
          bonus: totals.bonus,
        };
      });
    };

    const rows = createRows(selectedItems);

    return (
      <React.Fragment>
        <CollectionSection rows={rows} />
        <InfoSection rows={rows} handleResetGame={handleResetGame} />
      </React.Fragment>
    );
  }
}

export default GameInfo;
