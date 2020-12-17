import React from 'react';
import PrismCode from '../../components/atoms/PrismCode';

const Item = (): JSX.Element => {
  const code = `
const getPermutations = (arr, selectNumber) => {
  const results = [];

  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
      const combinations = getPermutations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      results.push(...attached);
  });

  return results;
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
        [2, 1]
        <br />
        [2, 3]
        <br />
        [2, 4]
        <br />
        [2, 5]
        <br />
        [3, 1]
        <br />
        [3, 2]
        <br />
        [3, 4]
        <br />
        [3, 5]
        <br />
        [4, 1]
        <br />
        [4, 2]
        <br />
        [4, 3]
        <br />
        [4, 5]
        <br />
        [5, 1]
        <br />
        [5, 2]
        <br />
        [5, 3]
        <br />
        [5, 4]
      </p>
    </>
  );
};

export default Item;
