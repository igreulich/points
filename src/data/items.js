import rules from './rules';

const UPPERCHARCODESTART = 65;
const LOWERCHARCODESTART = 97; // eslint-disable-line

const items = new Array(26).fill(1).map((_, i) => String.fromCharCode(UPPERCHARCODESTART + i));

export default items.map((item) => {
  const rule = rules[item];

  return {
    name: item,
    points: rule ? rule.unitPoints : 0,
    bonusQty: rule ? rule.bonusQty : 0,
    bonus: rule ? rule.bonus : 0,
  };
});
