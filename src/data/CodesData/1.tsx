import React from 'react';
import PrismCode from '../../components/atoms/PrismCode';

const Item = (): JSX.Element => {
  const code = `
const getCombinations = (arr, selectNumber) => {
  if(selectNumber === 1){
    return arr.map((value) => [value]);
  }

  return arr.reduce((acc, fixedNumber, index) => {
    const rest = arr.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((combination) => [fixedNumber, ...combination]);

    return acc.concat(attached);
  }, []);
};
`;
  return (
    <>
      <PrismCode code={code} language="javascript" />
      <h2>입력</h2>
      <p>
        const arr = [1, 2, 3, 4, 5];
        <br />
        const selectNumber = 2;
      </p>
      <h2>출력</h2>
      <p>
        [1, 2]
        <br />
        [1, 3]
        <br />
        [1, 4]
        <br />
        [1, 5]
        <br />
        [2, 3]
        <br />
        [2, 4]
        <br />
        [2, 5]
        <br />
        [3, 4]
        <br />
        [3, 5]
        <br />
        [4, 5]
      </p>
    </>
  );
};

export default Item;
